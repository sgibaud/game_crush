import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	ImageBackground: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	header: {
		backgroundColor: 'red',
	},
	globalHeader: {
		top: 50,
		paddingLeft: 10,
		paddingRight: 10
	},
	iconScore: {
		alignItems: "center",
		justifyContent: 'center',
		margin:20,
		padding: 4,
		width: 90,
		height: 90
	},
	iconScore2: {
		alignItems: "center",
		justifyContent: 'center',
		margin:20,
		padding: 4,
		width: 50,
		height: 50
	},
	triesScore: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: "100%",
	},
	triesScore2: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: "100%",
	},
	game: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	button_back: {
		backgroundColor: '#000000'
	},
	button_text: {
		color: '#000000'
	},

	display_back: {
		backgroundColor: '#000000'
	},
	display_front: {
		backgroundColor: '#0000FF'
	},
	display_innertext: {
		color: '#FFFFFF'
	},
	display_outertext: {
		color: '#FFFFFF'
	},
	levelbar_outer: {
		backgroundColor: '#FFEEEE'
	},
	levelbar_inner: {
		backgroundColor: '#0FFFF0'
	},
	gameitem: {
		backgroundColor: '#000000'
	},
	gameitem_background: {
		backgroundColor: '#00FF00'
	},
	grid: {
		backgroundColor: '#0000FF'
	},
	gridrow: {
		backgroundColor: '#FF0000'
	},
	scorecard: {
		backgroundColor: '#FFFF00'
	}
});