import React from 'react';
import { View, Text } from 'react-native';

// CSS
import { styles } from "../../css/style";

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            line: []
        }
    }

    render() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
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

        return (
                <View style={styles.box}>
                    {this.state.line}
                </View>
        )

    }

}