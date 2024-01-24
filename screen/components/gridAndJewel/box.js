import React from 'react';
import { View, Text, Image } from 'react-native';

// components
import JewelPiece from './jewelCollection';

// import constants
import { images } from "../../../constants";

// CSS
import { styles } from "../../../css/style";

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: null,
            gridHeight: 8,
            gridWidth: 8,
            line: [],
            jewel: [],
            jewelRandom: [
                images.one,
                images.two,
                images.three,
                images.four,
                images.five,
                images.six,
                images.seven,
            ]
        }
    }

    componentDidMount() {
        this.initGame();
        this.initJewel();
    }

    initGame = () => {
        this.setState({ grid: this.buildGrid()});
    }

    initJewel = () => {
        this.buildJewel();
    }

    // Jewel
    // generationJewel = () => {
    //     let jewel = this.JewelCollection;
    //     console.log(jewel);
    // }

    // Construction de la grille
    buildGrid = () => {
        for (let i = 0; i < this.state.gridWidth; i++) {
            for (let j = 0; j < this.state.gridHeight; j++) {
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

    // placement des jewels
    generateRandomImage = () => { 
        let i = Math.floor(Math.random() * this.state.jewelRandom.length); 
        // console.log(i);
        // console.log(this.state.jewelRandom[i]);
        return this.state.jewelRandom[i];
    }; 

    buildJewel = () => {
        for (let i = 0; i < this.state.gridWidth; i++) {
            for (let j = 0; j < this.state.gridHeight; j++) {
                this.state.jewel.push(
                    <Image style={styles.jewel} source={this.generateRandomImage()} />
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