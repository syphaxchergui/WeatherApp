import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './scr/screens/HomeScreen'


const navigator = createStackNavigator({
    Home: HomeScreen,
}, {
  initialRouteName: 'Home',
  
    //headerStyle: {
   //   backgroundColor: '#f4f3f9',
   // },
    //headerTintColor: '#030303',
   // headerTitle: 'Weather App'
   headerMode: 'none'
  
});

export default createAppContainer(navigator);