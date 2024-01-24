import React from "react";
import { ImageBackground, View } from "react-native";

// import constants
import { images } from '../../constants'

// CSS
import { styles } from '../../css/style';

export default class Pause extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<View style={[styles.container, styles.backgroundxModal]}>
					<ImageBackground source={images.player} style={styles.player}></ImageBackground>
			</View>
		);
	}
}