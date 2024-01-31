import React from "react";
import { View, ImageBackground } from "react-native";

// CSS
import { styles } from "../../css/style";

export default class BasicDisplay2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let { iconBlue } = this.props;

		return (
			<View style={styles.globalHeader}>
				<ImageBackground source={iconBlue} style={styles.iconScore2} />
			</View>
		)
	}
}