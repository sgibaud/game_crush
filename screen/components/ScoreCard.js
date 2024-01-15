import React from "react";
import { View } from "react-native";

import BasicDisplay from './BasicDisplay.js';
import BasicDisplay2 from './BasicDisplay2.js';

// CSS
import { styles } from '../../css/style.js';

export default class ScoreCard extends React.Component {

	render() {

		let score = this.props.score;
		let tries = this.props.tries;
		let style = this.props.style;

		return (
			<View>

				<View style={styles.triesScore2}>
					<BasicDisplay2 outertext='HELP' style={style} />
					<BasicDisplay2 outertext='PAUSE' style={style} />
				</View>
				<View style={styles.triesScore}>
					<BasicDisplay innertext={tries} outertext="Essai" style={style} />
					<BasicDisplay innertext={score} outertext="Score" style={style} />
				</View>
			</View>
		);
	}
}

// <ScoreCard score={score} tries={tries_left} style={style}/>
