import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class BudgetScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Lets Budget Ladies!"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default BudgetScreen;