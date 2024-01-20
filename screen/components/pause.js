import React from "react";
import { ImageBackground, View } from "react-native";


// CSS
import { styles } from '../../css/style';

export default class Pause extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const player = require("../../assets/icon/2x/playerxhdpi.webp");

		return (
			<View style={[styles.container, styles.backgroundxModal]}>
					<ImageBackground source={player} style={styles.player}></ImageBackground>
			</View>
		);
	}
}