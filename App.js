import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './scr/screens/HomeScreen'


const navigator = createStackNavigator({
    Home: HomeScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4f3f9',
    },
    headerTintColor: '#030303',
    headerTitle: 'Weather App'
  }
});

export default createAppContainer(navigator);