import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// CSS
import { styles } from "./css/style.js";

// import components
import Game from "./screen/GamePage.js";
import Login from "./screen/Login.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
