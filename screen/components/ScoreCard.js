import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

import BasicDisplay from './BasicDisplay.js';

export default class ScoreCard extends React.Component {
	
	render(){
		
		let score = this.props.score;
		let tries = this.props.tries;
		let style = this.props.style;
		
		return (
						<View style={style.scorecard}>
							<BasicDisplay innertext={score}  outertext="Score" style={style}/>
							<BasicDisplay innertext={tries}  outertext="Essai" style={style}/>
						</View>
					);
			}		
		}

 // <ScoreCard score={score} tries={tries_left} style={style}/>
