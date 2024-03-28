import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";

// import constants
import { images } from "../constants";

// import database
import { collection, addDoc } from "firebase/firestore";
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
    };
  }

  // inputValueUpdate = (val, prop) => {
  //   const state = this.state;
  //   state[prop] = val;
  //   this.setState(state);
  // };

  dbRef = collection(db, "bejewel");

  storeUser = async () => {
    if (this.state.name === this.state.name) {
      this.props.navigation.navigate("Game");
    } else {
      await addDoc(this.dbRef, {
        name: this.state.name,
        surname: this.state.surname,
        mail: this.state.mail,
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
