import React from "react";
import { StyleSheet, View, Image } from "react-native";

// import constants
import { images } from "../../../constants";
import { styles } from "../../../css/style";

export default class JewelPiece extends React.Component {
	render() {
		// let {jewel} = this.props;
		return(
			<View>
				<Image style={styles.jewel} source={images.one}>
				</Image>
			</View>
		)
	}
}