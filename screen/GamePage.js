import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

import LevelBar from './components/LevelBar.js';
import BasicButton from './components/BasicButton.js';
import ScoreCard from './components/ScoreCard.js';
import GameGrid from './components/GameGrid.js';

export default class Game extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			game: 0,
			score: 0,
			time: 0,
			tries: 0,
			matrix: [],
			level: 0,
			style: null
			};
		}	
	
	newgame(){
		this.state.tries=0;
		this.state.score=0;
		this.state.level=0;
		
		
		this.state.game=1;
		}
	
	swap(a,b){
		
		let temp = matrix[a[0]][a[1]];
		matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
		matrix[b[0]][b[1]] = temp;
		
		if (this.state.tries <= 0){this.endgame();}
		
		}
	
	tick(){
		if (this.state.game != 0){
			this.state.time--;
			if (this.state.time % 3 == 0) {
				this.state.score = this.state.score - level;
				if (this.state.score <= 0){this.endgame();}
				}
			setTimeout(this.tick(),1000)
			}
		}
	
	endgame(){this.state.game = 0;}
	
		render(){
		if(this.state.style == null){
				return (
								<View style={defaultstyle.game}>
									<ScoreCard tries={this.state.tries} score={this.state.score} style={defaultstyle} />
									<GameGrid matrix= {this.state.matrix} swap={(a,b) => this.swap(a,b)} style={defaultstyle} />
									<LevelBar score={this.state.score} level={this.state.level} style={defaultstyle} />
								</View>
							);
			}
		else{
				return (
								<View style={style.game}>
									<ScoreCard tries={this.state.tries} score={this.state.score} style={this.state.style} />
									<GameMatrix matrix= {this.state.matrix} swap={() => this.swap()} style={this.state.style} />
									<LevelBar score={this.state.score} level={this.state.level} style={this.state.style} />
								</View>
							);
				}
			}		
		}

const defaultstyle = {
	
	game:{
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width:'100%' ,
		height:'100%'
		}
	,
	
	button_back:{
		backgroundColor: '#000000'
		}
	,
	button_text:{
		color: '#000000'
		}
	,
	
	display_back:{
		backgroundColor: '#000000'
		}
	,
	display_front:{
		backgroundColor: '#0000FF'
		}
	,
	display_innertext:{
		color: '#00FFFF'
		}
	,
	display_outertext:{
		color: '#00FF00'
		}
	,	
	
	levelbar_outer:{
		backgroundColor: '#000000'
		}
	,	
	levelbar_inner:{
		backgroundColor: '#0FFFF0'
		}
	,
	
	gameitem:{
		backgroundColor: '#000000'
		}
	,	
	gameitem_background:{
		backgroundColor: '#00FF00'
		}
	,
	
	grid:{
		backgroundColor: '#0000FF'
		}
	,	
	gridrow:{
		backgroundColor: '#FF0000'
		}
	,
	
	scorecard:{
		backgroundColor: '#FFFF00'
		}
	
	}
