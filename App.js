import React from "react";
import { View } from 'react-native';

// CSS
import { styles } from "./css/style.js";

// import components
import GamePage from "./screen/GamePage.js";
import ScorePlayer from "./screen/components/player/scorePlayer.js";
import Pause from "./screen/components/pause.js";
import Login from "./screen/login.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (!this.state.fontsLoaded) {
    //   return <AppLoading />;
    // } else {
    return (
      <View style={styles.flex}>
        {/* <Login /> */}
        <GamePage />
        {/* <ScorePlayer /> */}
        {/* <Pause /> */}
      </View>
    );
  }
}