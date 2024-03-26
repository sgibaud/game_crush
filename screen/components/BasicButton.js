import React from "react";
import { Text, TouchableOpacity } from "react-native";


export default class BasicButton extends React.Component {

	render() {

		let buttontext = this.props.text;
		let pressed = this.props.pressed;
		let style = this.props.style;

		return (
			<TouchableOpacity style={style.button_back} onPress={pressed}>
				<Text style={style.button_text}>{buttontext}</Text>
			</TouchableOpacity>
		)
	}
}

// <BasicButton text={buttontext} pressed={onpressaction} style={style}/>
