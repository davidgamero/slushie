import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class InvestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Invest in da breast!"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default InvestScreen;