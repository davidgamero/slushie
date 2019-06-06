import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import colors from './colors';

export default class Onboard extends Component {

  constructor(props) {
    super(props);
  }

  onDone = () => {
    this.props.setState( {
      showOnboard: false,
  })
  };
  render() {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.onDone}
        />
      );
    
  }
}
const styles = StyleSheet.create({

  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titleWhite: {
    fontSize: 26,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
  textWhite: {
    color: colors.white,
    fontSize: 20,
    marginBottom: 70,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  bigImage:{
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});

const slides = [
  {
    key: 's1',
    title: 'Did you know?',
    text: 'If you invested $2 a day at age 20, you would be a millionaire by age 65.',
    image: require('./Images/Coin.png'),
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: colors.accent,
  },
  {
    key: 's2',
    title: 'Idle Money',
    text: 'Idle money in your checking account is not earning you more money.',
    image: require('./Images/Cash.png'),
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: colors.accent,
  },
  {
    key: 's3',
    title: 'Compound Interest',
    text: 'If you save more money sooner, compound interest will make it grow bigger and faster.',
    image: require('./Images/CashStack.png'),
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.bigImage,
    backgroundColor: colors.accent,
  },
  {
    key: 's4',
    title: 'How Slushie Can Help',
    //text: 'Slushie will help you move your idle money into accounts that will help it grow bigger and faster.',
    text: 'Slushie helps you visualize your transactions and where your money is going, while also assisting you in moving your idle money into accounts that will make it grow faster.',
    image: require('./Images/LightBulb.png'),
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: colors.accent
    ,
  }
];