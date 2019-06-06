import React from 'react';
import {
  Text, 
  View
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home';
import BudgetScreen from './screens/budget';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InvestScreen from './screens/invest';

const TabNavigator = createBottomTabNavigator({
  Invest: InvestScreen,
  Home: HomeScreen,
  Budget: BudgetScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Budget') {
          //iconName = `ios-checkmark-circle`;
          iconName = 'ios-analytics';
        }
        else if (routeName === 'Invest') {
          iconName = 'ios-trending-up';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);