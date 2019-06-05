import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Budget"
          onPress={() => this.props.navigation.navigate('Budget')}
        />
      </View>
    );
  }
}

export default HomeScreen;