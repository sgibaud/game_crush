import { StyleSheet } from "react-native";

const TekoBold = '../assets/fonts/Teko-Bold.ttf';

export const styles = StyleSheet.create({
	// font
	fontBold: {
		// fontFamily: TekoBold,
		fontWeight: '900',
		fontSize: 50,
		color: '#6805F2',
		margin: 0,
		padding: 0,
		bottom: 10,
		textShadowColor: 'rgb(0 0 0)',
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 4
	},
	fontGamer: {
		// fontFamily: TekoBold,
		fontWeight: '400',
		fontSize: 20,
		color: 'rgb(255 255 255)',
		marginBottom: 6
	},
	fontTable: {
		// fontFamily: TekoBold,
		fontWeight: '700',
		fontSize: 20,
		color: 'rgb(255 255 255)',
		marginBottom: 6
	},
	fontModal: {
		// fontFamily: TekoBold,
		fontWeight: '900',
		fontSize: 30,
		color: 'rgb(255 255 255)',
		marginBottom: 6
	},
	// Global
	flex: {
		flex: 1
	},
	flex_2: {
		flex: 2
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	directionRow: {
		flexDirection: 'row'
	},
	backgroundxModal: {
		flex: 1,
		backgroundColor: '#6805F2',
		opacity: 8
	},
	boxModal: {
		width: 250,
		height: 450,
		backgroundColor: '#05DBF2',
		borderRadius: 8,
		padding: 20
	},
	shadowProp: {
		shadowColor: 'rgb(60 60 60)',
		elevation: 20
	},
	space: {
		justifyContent: 'space-between',
		paddingRight: 23
	},
	margin: {
		marginBottom: 30
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
		top: '15%',
		paddingLeft: 10,
		paddingRight: 10
	},
	// Box Icon
	blockYellow: {
		paddingTop: 20,
		paddingBottom: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	newGame: {
		alignItems: "center",
		justifyContent: 'center',
		margin: 20,
		marginTop: 40,
		width: "auto",
		height: 49
	},
	player: {
		alignItems: "center",
		justifyContent: 'center',
		width: 90,
		height: 90
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
		marginRight: 20,
		width: 35,
		height: 35
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
	// Grid
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
		shadowColor: 'rgb(125 125 125)',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.85,
		shadowRadius: 2
	},
	// Divers
	button_back: {
		backgroundColor: '#000000'
	},
	button_text: {
		color: '#000000'
	},
	// CSS Robin
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
		// fontFamily: 'TekoBold',
		fontWeight: '800',
		fontSize: 20,
		color: 'rgb(255 255 255)',
		margin: 0
	},
	levelbar_outer: {
		width: 'auto',
		marginRight: 15,
		marginLeft: 15,
		height: '10%',
		padding: 2,
		// backgroundColor: '#FFEEEE',
		borderColor: '#0137BB',
		borderRadius: 8,
		borderWidth: 2
	},
	levelbar_inner: {
		width: '50%',
		height: '100%',
		borderRadius: 4,
		backgroundColor: '#37E2F5',
		alignItems: 'center',
		justifyContent: 'center'
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