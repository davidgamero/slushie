import React from 'react';
import {
  Text, 
  View
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home';
import BudgetScreen from './screens/budget'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Budget: BudgetScreen,
});

export default createAppContainer(TabNavigator);