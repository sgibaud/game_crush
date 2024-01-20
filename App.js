import React from 'react';
import { View } from 'react-native';
import * as Font from "expo-font";

import GamePage from './screen/GamePage.js';
import ScorePlayer from './screen/components/player/scorePlayer.js';
import { styles } from './css/style.js';
import Pause from './screen/components/pause.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  // // create a helper function to load the font 
  // _loadFontsAsync = async () => {
  //   // loadAsync returns true | error
  //   let isLoaded = await Font.loadAsync({
  //     // add as many fonts as you want here .... 
  //     'TekoBold': require("./assets/fonts/Teko-Bold.ttf"),
  //     'TekoLight': require("./assets/fonts/Teko-Light.ttf"),
  //     'TekoMedium': require("./assets/fonts/Teko-Medium.ttf"),
  //     'TekoRegular': require("./assets/fonts/Teko-Regular.ttf"),
  //     'TekoSemiBold': require("./assets/fonts/Teko-SemiBold.ttf")
  //   });
  //   this.setState({ loaded: isLoaded });
  // };

  // // call _loadFontsAsync 
  // componentDidMount() {
  //   this._loadFontsAsync();
  //   console.log(this._loadFontsAsync);
  // }

  render() {
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


