import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

// import constants
import { images } from "../../../constants";

// CSS
import { styles } from "../../../css/style";

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			start: [0,0],
			end: [0,0],
            status: true,
            matrix:[],
            grid: [],
            board: 64,
            line: [],
            gridWidth: 8,
            gridHeigth: 8,
            jewel: [],
            jewelRandom: [
                images.one,
                images.two,
                images.three,
                images.four,
                images.five,
                images.six,
                images.seven,
                images.eight
            ]
        }
    }

    componentDidMount() {
        this.initGame();
        //this.matrix = this.props.matrice;
        this.initJewel();
        
    }

    initGame = () => {
        this.setState({ grid: this.buildGrid() });
    }

    initJewel = () => {
        this.buildJewel();
    }

    // Construction de la grille
    buildGrid = () => {
        for (let i = 0; i < this.state.gridHeigth; i++) {
            for (let j = 0; j < this.state.gridWidth; j++) {
                if ((i + j) % 2 == 0) {
                    this.state.line.push(
                        <Text style={styles.gridBox}></Text>
                    )
                } else {
                    this.state.line.push(
                        <Text style={[styles.gridBox, styles.gridBoxB]}></Text>
                    )
                }
            }
        }
    }

    // jewels aléatoire
    generateRandomImage = () => {
        let i = Math.floor(Math.random() * this.state.jewelRandom.length);
        return this.state.jewelRandom[i];
    };

    // placement des jewels
    buildJewel = () => {
		this.matrix = this.props.matrice;
		this.state.jewel = [];
        for (let i = 0; i < this.state.gridHeigth; i++) {
            for (let j = 0; j < this.state.gridWidth; j++) {
                this.state.jewel.push(
                    <TouchableOpacity >
                        <Image 
							onTouchStart={
								(e) => {
									console.debug("TouchStart");
								  this.state.start= [e.nativeEvent.pageX,e.nativeEvent.pageY];
								  }
								} 
							onTouchEnd={
								(e) =>{
									console.log(this.matrix[i][j]);
									let offset = 30;
									let notdone = true;
									console.debug("TouchEnd");
								   this.state.end= [e.nativeEvent.pageX,e.nativeEvent.pageY];
								   
								   
								   console.log("Point séléctionné:");
								   console.log([i,j]);
								   //console.log("Debut/fin de slide :"); console.log(this.state.start); console.log(this.state.end);
								   if(this.state.end[0]-this.state.start[0]>offset){notdone = false; this.props.swap([i,j],[i,j+1])}
								   
								   if((this.state.end[0]-this.state.start[0]<-1*offset)&&notdone){notdone = false; this.props.swap([i,j],[i,j-1])}
								   
								   if((this.state.end[1]-this.state.start[1]>offset)&&notdone){notdone = false; this.props.swap([i,j],[i+1,j])}
								   
								   if((this.state.end[1]-this.state.start[1]<-1*offset)&&notdone){this.props.swap([i,j],[i-1,j])}
								   
								   
								   start = [0,0];
								   end = [0,0];
								   this.forceUpdate();
								   setTimeout(() => {console.log(this.matrix[i][j]);this.buildJewel();},500);
								  }
								}
                        
                        style={styles.jewel} source={this.matrix[i][j]} />
                    </TouchableOpacity>
                )
            }
        }
    }

    render() {

        return (
            <View>
                <View style={styles.box}>
                    {this.state.line}
                </View>
                <View style={styles.boxJewel}>
                    {this.state.jewel}
                </View>
            </View>
        )
    }
}
