import React from 'react';
import { View } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import Constants from 'expo-constants';
// console.log(Constants.systemFonts);



import GamePage from './screen/GamePage.js';
import ScorePlayer from './screen/components/player/scorePlayer.js';
import { styles } from './css/style.js';
import Pause from './screen/components/pause.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   fontsLoaded: [
    //     Teko_300Light,
    //     Teko_400Regular,
    //     Teko_500Medium,
    //     Teko_600SemiBold,
    //     Teko_700Bold,
    //   ]
    // }
  }

  render() {
    // if (!this.state.fontsLoaded) {
    //   return <AppLoading />;
    // } else {
      return (
        <View style={styles.flex}>
	      <GamePage />
	      {/* <ScorePlayer /> */}
	      {/* <Pause /> */}
        </View>
      );
    }
  }



// the same as Font.loadAsync , the hook returns  true | error 
// const [isLoaded] = useFonts(customFonts);


