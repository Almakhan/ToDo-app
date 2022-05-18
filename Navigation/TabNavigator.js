import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import Calculator from '../Screens/Calculator';
import Profile from '../Screens/Profile';
import SetTask from '../Screens/ToDo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Task') {
            iconName = focused 
            ? 'checkbox' 
            : 'checkbox-outline';
          } else if (route.name === 'Game') {
            iconName = focused 
            ? 'game-controller' 
            : 'game-controller-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused 
            ? 'calculator' 
            : 'calculator-outline';
          } else if (route.name === 'ReadStory') {
            iconName = focused 
            ? 'book' 
            : 'book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused 
            ? 'person' 
            : 'person-outline';
          }

          return <Ionicons name={iconName} size={RFValue(20)} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Task" component={SetTask} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
