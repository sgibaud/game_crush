import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

import GameItem from './GameItem.js';

export default class GameMatrix extends React.Component {

	render(){
		
		var matrixdisplay = null;
		var matrixrowdisplay = null;
		
		for(let i = 0 ; i < matrix.length ; i++){
			for(let j = 0 ; j < matrix[i].length ; j++){
				matrixrowdisplay += <GameItem image={'"assets/img/'+row[j]+'.png"'}  pressed={this.props.swap(row[j])} style={this.props.style}/>;
				}
			matrixdisplay += <View style={this.state.style.matrixrow}> {matrixrowdisplay} </View>;
			matrixrowdisplay = null;
			}
		
		return (
						<View style={this.state.style.matrix}>
							{matrixdisplay}
						</View>
					);
			}		
		}
