import React from "react";
import { Text, View, ImageBackground } from "react-native";

// CSS
import { styles } from "../../css/style";

export default class BasicDisplay2 extends React.Component {

	render() {

		let {iconBlue, innertext, outertext, style} = this.props;

		return (
			<View style={styles.globalHeader}>
				<ImageBackground source={iconBlue} style={styles.iconScore2} />
			</View>
		)
	}
}

// <BasicDisplay innertext={text}  outertext={text} style={style}/>