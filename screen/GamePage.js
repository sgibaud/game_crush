import React from "react";
import { View, ImageBackground, Modal, TouchableOpacity } from "react-native";

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
import ScorePlayer from "./components/player/scorePlayer.js";
import ModalPause from "./components/pause.js";

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			game: 0,
			score: 80,
			width: '50%',
			tries: 5,
			time: 0,
			matrix: [],
			level: 0,
			style: null,
			status: true,
			modalVisible: false,
			modalScore: false,
			pause: true
		};
	}

	// decrementation de la barre de temps
	componentDidMount() {
		this.count()
	}

	count() {
		let counter = 186;
		const interval = setInterval(() => {
			if (!this.state.status) {
				this.setState({ width: counter })
			} else {
				counter = counter - this.state.score;
				this.setState({
					width: counter
				})
				if (counter <= 0) {
					this.setState({
						width: 0
					})
					this.setState({ modalScore: true });
					clearInterval(interval);
				}
			}
		}, 3000);
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


	// function modal
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
									{/* Modal pour mettre en pause */}
									<Modal
										animation="slide"
										transparent={true}
										visible={this.state.modalVisible}
										hardwareAccelerated={true}
										statusBarTranslucent={true}
										onRequestClose={this.hideModal}>
										<ModalPause onPress={this.hideModal} />
									</Modal>

									{/* Modal pour l'affichage des scores finaux */}
									<Modal
										visible={this.state.modalScore}
										animation="slide"
										transparent={true}
										statusBarTranslucent={true}
									>
										<ScorePlayer />
									</Modal>

									<View style={styles.triesScore2}>
										<TouchableOpacity onPress={this.showModal}>
											<BasicDisplay2 iconBlue={images.iconPause} />
										</TouchableOpacity>
										<TouchableOpacity>
											<BasicDisplay2 iconBlue={images.iconHelp} />
										</TouchableOpacity>
									</View>
								</View>
							</View>

							{/* Icone du nombre d'essai et affichage du level */}
							<View style={styles.triesScore}>
								<BasicDisplay innertext={this.state.tries} outertext="ESSAI" />
								<BasicDisplay innertext={this.state.score} outertext="LEVEL" />
							</View>
						</View>
						{/* <ScoreCard
							tries={this.state.tries}
							score={this.state.score}
							// showModal={this.showModal}
							// hideModal={this.hideModal}
							/> */}

						{/* Compteur */}
						<LevelBar score={this.state.width} />
					</View>

					{/* affichage de la grille et des joyaux */}
					<View style={styles.flex_2}>
						{/* <GameGrid matrix={this.state.matrix} swap={(a, b) => this.swap(a, b)} style={styles} /> */}
						{this.state.status ? <Box /> : null}
					</View>
				</ImageBackground>
			</View>
		);
	}
}
