import React from "react";
import { View } from "react-native";

// import components
import BasicDisplay from './BasicDisplay.js';
import BasicDisplay2 from './BasicDisplay2.js';

// import constants
import { images } from '../../constants'

// CSS
import { styles } from '../../css/style.js';

export default class ScoreCard extends React.Component {

	render() {

		let {score, tries, style} = this.props;

		return (
			<View style={styles.flex}>
				<View style={styles.triesScore2}>
					<BasicDisplay2 iconBlue={images.iconHelp} style={style} />
					<BasicDisplay2 iconBlue={images.iconPause} style={style} />
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
