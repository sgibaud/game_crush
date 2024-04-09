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
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../database/firebaseDb.js";

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

  // fonction d'inscrption et de connexion
  login = async () => {
    const dbRef = collection(db, "bejewel");
    const q = query(dbRef.where("name", "==", this.state.name));
    try {
      const querySnapShot = await getDocs(q);
      const players = querySnapShot.docs.map((doc) => doc.data());

      if (players.length > 0) {
        console.log(players);
        this.props.navigation.navigate("Game");
      } else {
        addDoc(this.dbRef, {
          name: this.state.name,
          surname: this.state.surname,
          mail: this.state.mail,
          level: "",
        });
        this.props.navigation.navigate("Game");
      }
    } catch (error) {
      console.error("erreur de chargement:", error.message);
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
          <TouchableOpacity onPress={() => this.login()}>
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
