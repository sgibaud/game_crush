import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";



export default class BasicDisplay extends React.Component{
	
	render(){
		
		let innertext = this.props.innertext;
		let outertext = this.props.outertext;
		let style = this.props.style;
		
		return(
				<View style={style.display_back}>
				<Text style={style.display_outertext}>{outertext}</Text>
					<View style={style.display_front}>
					<Text style={style.display_innertext}>{innertext}</Text>
					</View>
				</View>
			)
		}
	}

 // <BasicDisplay innertext={text}  outertext={text} style={style}/>
