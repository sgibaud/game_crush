import React from "react";
import { View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "../../css/style";


export default class LevelBar extends React.Component {


	render() {

		let score = this.props.score;
		let level = this.props.level;
		let style = this.props.style;

		return (
			<View style={style.levelbar_outer}>
					<LinearGradient
						colors={['#37E2F5', '#9BF1FA', '#37E2F5']}
						style={styles.levelbar_inner}>
					</LinearGradient>
			</View>
		);
	}
}

// <LevelBar score={score} level={level_reached} style={style}/>
