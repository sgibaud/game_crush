import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from "react-native";

// COMPONENTS
import LevelBar from './components/LevelBar.js';
import BasicButton from './components/BasicButton.js';
import ScoreCard from './components/ScoreCard.js';
import GameGrid from './components/GameGrid.js';
import Box from "./components/box.js";

// CSS
import { styles } from '../css/style.js';

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			game: 0,
			score: 0,
			time: 0,
			tries: 0,
			matrix: [],
			level: 0,
			style: null
		};
	}

	newgame() {
		this.state.tries = 0;
		this.state.score = 0;
		this.state.level = 0;
		this.state.game = 1;
	}

	swap(a, b) {

		let temp = matrix[a[0]][a[1]];
		matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
		matrix[b[0]][b[1]] = temp;

		if (this.state.tries <= 0) { this.endgame(); }

	}

	tick() {
		if (this.state.game != 0) {
			this.state.time--;
			if (this.state.time % 3 == 0) {
				this.state.score = this.state.score - level;
				if (this.state.score <= 0) { this.endgame(); }
			}
			setTimeout(this.tick(), 1000)
		}
	}

	endgame() { this.state.game = 0; }

	render() {
		const image = require("../assets/img/wp7875320.jpg");;

		if (this.state.style == null) {
			return (
				<View style={styles.game}>
					<ImageBackground source={image} style={styles.ImageBackground}>
						<View style={styles.flex}>
							<ScoreCard tries={this.state.tries} score={this.state.score} style={styles} />
							<GameGrid matrix={this.state.matrix} swap={(a, b) => this.swap(a, b)} style={styles} />
							<LevelBar score={this.state.score} level={this.state.level} style={styles} />
						</View>
						<Box />
					</ImageBackground>
				</View>
			);
		}
		else {
			return (
				<View style={styles.game}>
					<ScoreCard tries={this.state.tries} score={this.state.score} style={this.state.style} />
					<LevelBar score={this.state.score} level={this.state.level} style={this.state.style} />
					<View>
						<GameGrid matrix={this.state.matrix} swap={() => this.swap()} style={this.state.style} />
						<Box />
					</View>
				</View>
			);
		}
	}
}
