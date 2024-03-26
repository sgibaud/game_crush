import React from "react";
import { Modal, ImageBackground, Pressable, View, TouchableOpacity } from "react-native";

// import constants
import { images } from '../../constants';

// Import component


// CSS
import { styles } from '../../css/style';

export default class ModalPause extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		let { onPress, onRequestClose } = this.props;
		return (
										<View style={[styles.container, styles.backgroundModal]}>
											<TouchableOpacity
												onPress={onPress}>
												<ImageBackground source={images.player} style={styles.player}></ImageBackground>
											</TouchableOpacity>
										</View>
		);
	}
}