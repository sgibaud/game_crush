import React from "react";
import { View, Pressable, ImageBackground, Modal } from "react-native";

// COMPONENTS
import BasicButton from './components/BasicButton.js';
import GameGrid from './components/GameGrid.js';
import ScoreCard from './components/ScoreCard.js';
import LevelBar from './components/LevelBar.js';
import BasicDisplay from '../screen/components/BasicDisplay.js';
import BasicDisplay2 from '../screen/components/BasicDisplay2.js';
import Box from "./components/gridAndJewel/box.js";

// import constants
import { images } from '../constants'

// CSS
import { styles } from '../css/style.js';

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			game: 0,
			score: 0,
			tries: 5,
			time: 0,
			matrix: [],
			level: 0,
			style: null,
			status: true,
			modalVisible: false,
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

	showModal = () => {
		this.setState({ modalVisible: true });
		this.setState({ status: !this.state.status });
	}
	
	hideModal = () => {
		this.setState({ modalVisible: false });
		this.setState({ status: !this.state.status });
	}

	render() {
		const image = require("../assets/img/wp7875320.jpg");
		let { score, tries } = this.props;

		return (
			<View style={styles.game}>
				<ImageBackground source={image} style={styles.ImageBackground}>
					<View style={styles.flex}>
						<View style={styles.flex}>
							<View>
								<View>
									<Modal
										animation="slide"
										transparent={true}
										visible={this.state.modalVisible}
										hardwareAccelerated={true}
										statusBarTranslucent={true}
										onRequestClose={this.hideModal}>
										<View style={[styles.container, styles.backgroundModal]}>
											<Pressable
												onPress={this.hideModal}>
												<ImageBackground source={images.player} style={styles.player}></ImageBackground>
											</Pressable>
										</View>
									</Modal>
									<View style={styles.triesScore2}>
										<Pressable onPress={this.showModal}>
											<BasicDisplay2 iconBlue={images.iconPause} />
										</Pressable>
										<Pressable>
											<BasicDisplay2 iconBlue={images.iconHelp} />
										</Pressable>
									</View>
								</View>
							</View>
							<View style={styles.triesScore}>
								<BasicDisplay innertext={this.state.tries} outertext="ESSAI" />
								<BasicDisplay innertext={this.state.score} outertext="SCORE" />
							</View>
						</View>
						{/* <ScoreCard
							tries={this.state.tries}
							score={this.state.score}
							// showModal={this.showModal}
							// hideModal={this.hideModal}
							/> */}

						<LevelBar score={this.state.score} level={this.state.level} />
					</View>
					<View style={styles.flex_2}>
						{/* <GameGrid matrix={this.state.matrix} swap={(a, b) => this.swap(a, b)} style={styles} /> */}
						{this.state.status ? <Box /> : null}
					</View>
				</ImageBackground>
			</View>
		);
	}
}
