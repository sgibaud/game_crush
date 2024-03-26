import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

export default class GameItem extends React.Component{
	
	render(){
		
		let image = this.props.image;
		let pressed = this.props.pressed;
		let style = this.props.style;
		
		return(
				<TouchableOpacity style={style.gameitem_background} onPress={pressed}>
					<Image style={style.gameitem} source={image}/>
				</TouchableOpacity>
			)
		}
	}

 // <GameItem image={url}  pressed={onpress} style={style}/>
