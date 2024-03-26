import React from "react";
import { Pressable, View, Modal, ImageBackground } from "react-native";

// import components
import BasicDisplay from './BasicDisplay.js';
import BasicDisplay2 from './BasicDisplay2.js';
import ModalPause from "./pause.js";

// import constants
import { images } from '../../constants'

// CSS
import { styles } from '../../css/style.js';

export default class ScoreCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false,
		}

		showModal = ({status}) => {
			this.setState({ modalVisible: true });
			// this.setState({ status: this.state.status });
		}

		hideModal = () => {
			this.setState({ modalVisible: false });
		}
	}

	render() {

		let { score, tries } = this.props;

		return (
			<View style={styles.flex}
>
				<View>
					<View>
						<Modal
							animation="slide"
							transparent={true}
							visible={this.state.modalVisible}
							hardwareAccelerated={true}
							statusBarTranslucent={true}
							onRequestClose={hideModal}
							// showModal={showModal}
							// hideModal={hideModal}
						>
							<View style={[styles.container, styles.backgroundModal]}>
								<Pressable
									onPress={hideModal}>
									<ImageBackground source={images.player} style={styles.player}></ImageBackground>
								</Pressable>
							</View>
						</Modal>
						<View style={styles.triesScore2}>
							<Pressable onPress={showModal}>
								<BasicDisplay2 iconBlue={images.iconPause} />
							</Pressable>
							<Pressable>
								<BasicDisplay2 iconBlue={images.iconHelp} />
							</Pressable>
						</View>
					</View>
				</View>
				<View style={styles.triesScore}>
					<BasicDisplay innertext={tries} outertext="ESSAI" />
					<BasicDisplay innertext={score} outertext="SCORE" />
				</View>
			</View>
		);
	}
}
