import React from "react";
import { ImageBackground, Text, View } from "react-native";

// Components
import Player from './player.js';

// import constants
import { images } from '../../../constants'

// CSS
import { styles } from '../../../css/style';

export default class ScorePlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: []
		}
	}

	render() {
		for (let i = 0; i < 6; i++) {
			this.state.player.push(
				<View style={[styles.directionRow, styles.space]}>
					<Player playerScore="gamer" />
					<Player playerScore={i} />
				</View>
			)
		}

		return (
			<View style={[styles.container, styles.backgroundModal]}>
				<View style={[styles.boxModal, styles.shadowProp]}>
					<View style={[styles.container, styles.margin]}>
						<Text style={styles.fontModal}>HIGHSCORE</Text>
					</View>
					<View style={[styles.directionRow, styles.triesScore]}>
						<Text style={styles.fontTable}>PLAYER</Text>
						<Text style={styles.fontTable}>LEVEL</Text>
					</View>
					{this.state.player}
					<ImageBackground source={images.newGame} style={styles.newGame}></ImageBackground>
				</View>
			</View>
		);
	}
}