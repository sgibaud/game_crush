import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";
import {styles} from './Style.js';

export default class BasicButton extends React.Component{
	
	render(){
		
		let buttontext = this.props.text;
		let pressed = this.props.pressed;
		
		return(
				<TouchableOpacity style={styles.button1back} onPress={pressed}>
					<Text style={styles.button1}>{buttontext}</Text>
				</TouchableOpacity>
			)
		}
	}

 // <BasicButton text={buttontext} pressed={onpressaction}/>
