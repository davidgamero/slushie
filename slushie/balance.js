import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from './styles';

class Balance extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.chart_title} >
            Checking Balance:     $12,347.36
        </Text>

        <Text style={styles.chart_title} >
            Savings Balance:     $23,101.83
        </Text>
      </View>
      
    );
  }
}

export default Balance;