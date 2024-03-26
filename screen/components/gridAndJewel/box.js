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
            status: true,
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
                images.seven
            ]
        }
    }

    componentDidMount() {
        this.initGame();
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

    // placement des jewels
    generateRandomImage = () => {
        let i = Math.floor(Math.random() * this.state.jewelRandom.length);
        // console.log(i);
        // console.log(this.state.jewelRandom[i]);
        return this.state.jewelRandom[i];
    };

    // isValide = (valide) => {
    //     for (let i = 0; i < valide.length; i++) {
    //         if (valide[i] === valide[i + 1] && valide[i] == valide[i + 2]) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    buildJewel = () => {
        for (let i = 0; i < this.state.gridHeigth; i++) {
            for (let j = 0; j < this.state.gridWidth; j++) {
                this.state.jewel.push(
                    <TouchableOpacity>
                        <Image style={styles.jewel} source={this.generateRandomImage()} />
                    </TouchableOpacity>
                )
            }
        }
    }

    renderItem = ({ i }) => {
        return <Image style={styles.jewel}>{i.jewelRandom}</Image>
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