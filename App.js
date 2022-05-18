import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import db from "./Config";
import LoginScreen from "./Screens/Login";
import DashboardScreen from "./Screens/Dashboard";

import { createSwitchNavigator, createAppContainer } from "react-navigation";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    BottomTab: {
      screen: DashboardScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);





// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';


// import DrawerNavigator from "./Navigation/DrawerNavigator"


// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator/>
//     </NavigationContainer>
//   );
// }