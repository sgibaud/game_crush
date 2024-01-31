import React from "react";
import { Modal, ImageBackground, Pressable, View } from "react-native";

// import constants
import { images } from '../../constants';

// Import component


// CSS
import { styles } from '../../css/style';

export default class ModalPause extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false
		}
	}

	render() {
		return (
			<View>
						<Modal
							animation="slide"
							transparent={true}
							visible={this.state.modalVisible}
							onRequestClose={() => { this.setState({ modalVisible: false }) }}>
							<View style={[styles.container, styles.backgroundModal]}>
								<Pressable
									onPress={() => this.setState({ modalVisible: false })}>
									<ImageBackground source={images.player} style={styles.player}></ImageBackground>
								</Pressable>
							</View>
						</Modal>
			</View>
		);
	}
}