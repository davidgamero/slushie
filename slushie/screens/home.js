import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import AreaSpline from '../d3chart/charts/AreaSpline';
import Pie from '../d3chart/charts/Pie';
import Theme from '../d3chart/theme';
import data from '../d3chart/data';

class HomeScreen extends React.Component {
  render() {
    const height = 200;
    const width = 500;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pie
            pieWidth={150}
            pieHeight={150}
            //onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />
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