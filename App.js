import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import GamePage from './screen/GamePage.js';

export default function App() {
  return (
    <View>
		<GamePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
