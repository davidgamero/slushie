import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from './styles';

class BigButton extends React.Component {
  render() {
    return (
      <View style={styles.bigButton}>
        <Text style={styles.bigButtonText} >
            {this.props.label}
        </Text>

      </View>
      
    );
  }
}

export default BigButton;