import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";

// import constants
import { images } from '../../../constants'

// CSS
import { styles } from "../../../css/style";

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { btnName1, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, styles.button1, styles.margin]}
      >
        <Text style={[styles.text, styles.text1]}>{btnName1}</Text>
      </TouchableOpacity>
    );
  }
}
