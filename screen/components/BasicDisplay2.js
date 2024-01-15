import React from "react";
import { Text, View, ImageBackground } from "react-native";

// CSS
import { styles } from "../../css/style";

export default class BasicDisplay2 extends React.Component {

	render() {

		const iconScore = require("../../assets/icon/2x/zonePurplexhdpi.webp");

		let innertext = this.props.innertext;
		let outertext = this.props.outertext;
		let style = this.props.style;

		return (
			<View style={styles.globalHeader}>
				<ImageBackground source={iconScore} style={styles.iconScore2}>
					<Text style={styles.display_outertext}>{outertext}</Text>
				</ImageBackground>
			</View>
		)
	}
}

// <BasicDisplay innertext={text}  outertext={text} style={style}/>