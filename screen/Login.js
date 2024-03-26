import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

// import constants
import { images } from "../constants";

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
      mail: ""
    };

    onPressLogin = () => {
      const formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("surname", this.state.surname);
      formData.append("mail", this.state.mail);
      // fetch("http://localhost:3306/bejewel/", {
      //   method: "POST",
      //   headers: {
      //     // Accept: "application/json",
      //     // "Content-Type": "application/json",
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((json) => {
      this.props.navigation.navigate("Game");
      // if(json == true) {
      //   this.props.navigation.navigate("Game");
      // } else {
      //   Alert.alert(
      // 		'Erreur',
      // 		'Login ou mot de passe',
      // 		[
      // 			{ text: 'OK', onPress: () => console.log('Ok pressed') },
      // 		],
      // 		{ cancelable: false },
      // 	);
      // }
      // });
    };
  }

  render() {
    return (
      <ImageBackground
        source={images.back_2}
        style={styles.ImageBackground}
      >
        <View style={[styles.container, styles.flex]}>
          <Image source={images.logo2} style={styles.logo} />
          <InputConnection
            placeHolder="nom"
            // value={this.state.mail}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <InputConnection
            placeHolder="prénom"
            // value={this.state.pwd}
            onChangeText={(text) => this.setState({ surname: text })}
          />
          <InputConnection
            placeHolder="mail"
            // value={this.state.pwd}
            onChangeText={(text) => this.setState({ mail: text })}
          />
          <TouchableOpacity onPress={onPressLogin}>
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
