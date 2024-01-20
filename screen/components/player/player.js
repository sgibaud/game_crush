import React from 'react';
import { View, Text } from "react-native";

// CSS
import { styles } from '../../../css/style';

export default class Player extends React.Component {


	render() {
		const { playerScore } = this.props;

		return (
			<View>
				<Text style={styles.fontGamer}>{playerScore}
				</Text>
			</View>
		)
	}
}