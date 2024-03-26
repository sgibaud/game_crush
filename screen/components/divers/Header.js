import React from "react";
import { View, Text } from "react-native";

// CSS
import { styles } from "../../../css/style";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title } = this.props;

		return (
			<View>
				<Text style={[styles.fontBold]}>
					{title}
				</Text>
			</View>
		)
	}
}