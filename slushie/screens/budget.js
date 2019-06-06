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
import styles from '../styles';

class BudgetScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear)});
  }

  _shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
  }
  render() {
    const height = 200;
    const width = 300;

    return (
      <View style={styles.pageContainer}>
        <View>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.chart_title}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
            <AreaSpline
              width={width}
              height={height}
              data={this.state.spendingsPerYear}
              color={Theme.colors[this.state.activeIndex]} />
          </View>
        </View>
      </View>
    );
  }
};

export default BudgetScreen;