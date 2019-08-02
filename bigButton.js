import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

class BigButton extends React.Component {
  render() {
    return (
        <TouchableOpacity>
            <View style={styles.bigButton}>
                <Text style={styles.bigButtonText} >
                    {this.props.label}
                </Text>
            </View>
        </TouchableOpacity>
    );
  }
}

export default BigButton;