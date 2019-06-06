import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  // Change to go back to other screen
  onDone = () => {
    
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
const purple = '#C066CC'
const white = '#FFFFFF'
const styles = StyleSheet.create({

  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titleWhite: {
    fontSize: 26,
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  textWhite: {
    color: white,
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});

const slides = [
  {
    key: 's1',
    title: 'Did you know?',
    text: '*Insert interesting investment fact*',
    image: require('./Images/Coin.png'),
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: purple,
  },
  {
    key: 's2',
    title: 'Compound Interest',
    text: '*Explain how compound interest effects money*',
    image: {
      uri:
        'https://imgur.com/BVQ79rh.png',
    },
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: purple,
  },
  {
    key: 's3',
    title: 'Idle Money',
    text: '*Explain how checking accounts have low interest rates and other accounts have higher*',
    image: {
      uri: 'https://imgur.com/RPI8wie.png',
    },
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: purple,
  },
  {
    key: 's4',
    title: 'Levels of Investment',
    text: '*Explain levels of investment*',
    image: {
      uri: 'https://imgur.com/f1GhQo1.png',
    },
    titleStyle: styles.titleWhite,
    textStyle: styles.textWhite,
    imageStyle: styles.image,
    backgroundColor: purple,
  }
];