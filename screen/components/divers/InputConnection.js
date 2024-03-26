import React from "react";
import { View, TextInput } from "react-native";

// CSS
import { styles } from "../../../css/style";

export default class InputConnection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { input, placeHolder, onChangeText, type } = this.props;

		return (
			<View>
				<TextInput
					onChangeText={onChangeText}
					placeholder={placeHolder}
					keyboardType={type}
					style={[styles.textInput, styles.input]}
					value={input}
					>
				</TextInput>
			</View>
		)
	}
}