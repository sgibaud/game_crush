import React from "react";
import { Text, View, ImageBackground } from "react-native";

// CSS
import { styles } from "../../css/style";

export default class BasicDisplay extends React.Component {

	render() {

		const iconScore = require("../../assets/icon/2x/zoneYellowxhdpi.webp");

		let innertext = this.props.innertext;
		let outertext = this.props.outertext;
		let style = this.props.style;

		return (
			<View style={styles.globalHeader}>
				<ImageBackground source={iconScore} style={styles.iconScore}>
					<Text style={styles.display_outertext}>{outertext}</Text>
					<View>
						<Text style={styles.display_innertext}>{innertext}</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

// <BasicDisplay innertext={text}  outertext={text} style={style}/>