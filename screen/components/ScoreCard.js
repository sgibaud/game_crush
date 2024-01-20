import React from "react";
import { View } from "react-native";

import BasicDisplay from './BasicDisplay.js';
import BasicDisplay2 from './BasicDisplay2.js';

// CSS
import { styles } from '../../css/style.js';

export default class ScoreCard extends React.Component {

	render() {

		const iconPause = require("../../assets/icon/2x/zonePurplePausexhdpi.webp");
		const iconHelp = require("../../assets/icon/2x/zonePurpleHelpxhdpi.webp");

		let {score, tries, style} = this.props;

		return (
			<View style={styles.flex}>
				<View style={styles.triesScore2}>
					<BasicDisplay2 iconBlue={iconHelp} style={style} />
					<BasicDisplay2 iconBlue={iconPause} style={style} />
				</View>
				<View style={styles.triesScore}>
					<BasicDisplay innertext={tries} outertext="ESSAI" style={style} />
					<BasicDisplay innertext={score} outertext="SCORE" style={style} />
				</View>
			</View>
		);
	}
}

// <ScoreCard score={score} tries={tries_left} style={style}/>
