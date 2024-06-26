import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";

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
  where,
} from "firebase/firestore";
import { db } from "../database/firebaseDb.js";

// components
import InputConnection from "./components/divers/InputConnection.js";

// import components
import { styles } from "../css/style.js";
import { player } from "../constants/images.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: "",
      mail: "",
      level: "",
      id: "",
    };
  }

  // connexion à la base Firestore
  dbRef = collection(db, "bejewel");

  // lit la bdd pour connaitre les utilisateurs
  getUser = async () => {
    const docSnap = await getDocs(this.dbRef);
    // console.log(docSnap.docs.map((doc) => doc.data()));
    return docSnap.docs.map((doc) => doc.data());
  };

  login = async () => {
    const user = await this.getUser();
    let name = this.state.name;

    const findName = user.find((f) => f.name == name);
    // console.log(findName.name);

    if (findName) {
      const q = query(this.dbRef, where("name", "==", name));
      const snapshot = await getDocs(q);
      // // console.log(snapshot);

      // // récupère l'id de l'utilisateur
      const doc = snapshot.docs[0];

      const id = doc.id;
      // console.log(id);
      // console.log("coucou");
      // console.log({name : findName});
      this.props.navigation.navigate("Game", { id });
    } else {
      await addDoc(this.dbRef, {
        name: this.state.name,
        surname: this.state.surname,
        mail: this.state.mail,
        level: "",
      });
      // console.log("Joueur créé avec l'ID:", id);
      // console.log(this.setState({name: name}));
      this.props.navigation.navigate("Game");
    }
  };

  render() {
    const { name, surname, mail } = this.state;

    return (
      <ImageBackground source={images.back_2} style={styles.ImageBackground}>
        <View style={[styles.container, styles.flex]}>
          <Image source={images.logo2} style={styles.logo} />
          <InputConnection
            placeHolder={"name"}
            value={name}
            onChangeText={(name) => this.setState({ name })}
          />
          <InputConnection
            placeHolder={"surname"}
            value={surname}
            onChangeText={(surname) => this.setState({ surname })}
          />
          <InputConnection
            placeHolder={"mail"}
            value={mail}
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
