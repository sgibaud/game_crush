import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  DynamicColorIOS,
} from "react-native";

// import constants
import { images } from "../constants";

// import database
import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import db from "../database/firebaseDb.js";

// components
import InputConnection from "./components/divers/InputConnection.js";

// import components
import { styles } from "../css/style.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      mail: "",
      level: "",
      player: [],
    };
  }

  async componentDidMount() {
    const user = await this.getUser();
    this.setState({ player: user });
  }

  // connexion à la base Firestore
  dbRef = collection(db, "bejewel");

  // lit la bdd pur connaitre les utilisateurs
  getUser = async () => {
    const docSnap = await getDocs(this.dbRef);
    const names = docSnap.docs.map((doc) => doc.data());
    // console.log(`${doc.id} => ${doc.data()}`);
    // console.log(names);
    return names;
  };

  storeUser = async () => {
    let playerName = this.state.player.map((users) => {
      return users.name;
    });
    let playerSurname = this.state.player.map((users) => {
      return users.surname;
    });
    let playerMail = this.state.player.map((users) => {
      return users.mail;
    });
    if (this.state.name === playerName && this.state.surname === playerSurname && this.state.mail === playerMail) {
      this.props.navigation.navigate("Game");
    } else {
      await addDoc(this.dbRef, {
        name: this.state.name,
        surname: this.state.surname,
        mail: this.state.mail,
        level: "",
      });
      this.props.navigation.navigate("Game");
    }
  };

  render() {
    return (
      <ImageBackground source={images.back_2} style={styles.ImageBackground}>
        <View style={[styles.container, styles.flex]}>
          <Image source={images.logo2} style={styles.logo} />
          <InputConnection
            placeHolder={"name"}
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <InputConnection
            placeHolder={"surname"}
            value={this.state.surname}
            onChangeText={(surname) => this.setState({ surname })}
          />
          <InputConnection
            placeHolder={"mail"}
            value={this.state.mailAddress}
            onChangeText={(mail) => this.setState({ mail })}
          />
          <TouchableOpacity onPress={() => this.storeUser()}>
            <ImageBackground
              source={images.game}
              style={styles.btnGame}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
