import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


// CSS
import { styles } from "../../css/style";



export default class LevelBar extends React.Component {
	constructor(props) {
		super(props);

	}


	render() {

		let { score } = this.props;
		return (
			<View style={styles.levelbar_outer}>
				<LinearGradient
					colors={['#37E2F5', '#9BF1FA', '#37E2F5']}
					style={[styles.levelbar_inner]} 
					width={score}>
				</LinearGradient>
			</View>
		);
	}
}