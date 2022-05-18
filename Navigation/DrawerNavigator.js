import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "./TabNavigator";


const Drawer= createDrawerNavigator()

const DrawerTabNavigator=()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator}/>
    </Drawer.Navigator>
  )
}
export default DrawerTabNavigator;