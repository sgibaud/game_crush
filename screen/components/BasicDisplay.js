import React from "react";
import { Text, View, ImageBackground } from "react-native";

// import constants
import { images } from '../../constants'

// CSS
import { styles } from "../../css/style";

export default class BasicDisplay extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		images: ''
	// 	}

	// }

	render() {

		let {innertext, outertext, style} = this.props;

		return (
			<View style={styles.globalHeader}>
				<ImageBackground source={images.iconScore} style={styles.iconScore}>
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