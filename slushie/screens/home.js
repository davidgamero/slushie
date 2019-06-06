import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../styles';


class HomeScreen extends React.Component {

  render() {
    

    return (
      <View style={styles.pageContainer}>
        <View style={styles.cardContainer}>
          <Text>Waddup in a card</Text>
        </View>

      </View>
    );
  }
}


export default HomeScreen;