import React from "react";
import { Text, View, ImageBackground } from "react-native";

// CSS
import { styles } from "../../css/style";

export default class BasicDisplay extends React.Component {

	render() {

		const iconScore = require("../../assets/icon/2x/zoneYellowxhdpi.webp");

		let {innertext, outertext, style} = this.props;

		return (
			<View style={styles.globalHeader}>
				<ImageBackground source={iconScore} style={styles.iconScore}>
					<View style={styles.blockYellow}>
						<Text style={styles.display_outertext}>{outertext}</Text>
						<Text style={styles.fontBold}>{innertext}</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

// <BasicDisplay innertext={text}  outertext={text} style={style}/>	