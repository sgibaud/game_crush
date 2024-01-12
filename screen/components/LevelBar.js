import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";


export default class LevelBar extends React.Component {
	
	
	render(){
		
		let score = this.props.score;
		let level = this.props.level;
		let style = this.props.style;
		
		return (
						<View style={style.levelbar_outer}>
							<View style={style.levelbar_inner}>
							</View>
						</View>
					);
			}		
		}

// <LevelBar score={score} level={level_reached} style={style}/>
