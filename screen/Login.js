import React from "react";
import { View, ImageBackground, Image, InputText, Text } from "react-native";

// import constants
import { images } from "../constants";

// components
import InputConnection from "./components/divers/InputConnection.js";

// import components
import Header from "./components/divers/Header.js";
import { styles } from "../css/style.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      pwd: "",
    };
  }

  render() {
    return (
      <ImageBackground source={images.back_2} style={styles.ImageBackground}>
        <View style={[styles.container, styles.flex]}>
          <Image source={images.logo} style={styles.logo} />
          <InputConnection
            placeHolder="mail"
            //   value={this.state.mail}
            //   onChangeText={(text) => this.setState({ mail: text })}
          />
          <InputConnection
            placeHolder="mot de passe"
            //   value={this.state.pwd}
            //   onChangeText={(text) => this.setState({ mail: text })}
          />
        </View>
      </ImageBackground>
    );
  }
}
