import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
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
		margin: 20,
		padding: 4,
		width: 90,
		height: 90
	},
	iconScore2: {
		alignItems: "center",
		justifyContent: 'center',
		margin: 20,
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
		width: '100%',
		height: '100%'
	},
	gridBox: {
		width: '12%',
		height: '12%',
		backgroundColor: 'rgba(0 0 0 / 0.10)',
		borderRadius: 8,
		margin: 0.75
	},
	gridBoxB: {
		backgroundColor: 'rgba(0 0 0 / 0.15)',
	},
	box: {
		bottom: 100,
		height: 400,
		margin: 15,
		padding: 1,
		backgroundColor: 'rgba(255 255 255 / 0.15)',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignContent: 'center',
		borderRadius: 8,
		borderColor: 'rgb(242 25 5)',
		borderWidth: 2,
		// shadowColor: 'rgb(0 0 0)',
		// shadowOffset: {width: 5, height: 6},
		// shadowOpacity: 0.5,
		// shadowRadius: 3
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