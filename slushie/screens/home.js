import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import styles from '../styles';
import Pie from '../d3chart/charts/Pie';
import Theme from '../d3chart/theme';
import data from '../d3chart/data';
import LineChart from "react-native-responsive-linechart";
import Balance from '../balance';

class HomeScreen extends React.Component {
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

    const data4 = [8,9,11,14,17,27,39];
    const xlabels4 = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];
    const config4 = {
      interpolation: "spline",
      line: { strokeColor: "#be2ddd", strokeWidth: 2 },
      yAxis: {
        visible: false,
       // labelFormatter: v => Math.round(v),
      },
      xAxis: {
        visible: true,
      },
      grid: { visible: false }
    };

    return (
      <View style={styles.pageContainer}>
        <ScrollView style={styles.pageContainer}>
          <Text style={styles.pageSubTitle}>Welcome back,</Text>
          <Text style={styles.pageTitle}>Jason</Text>
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
              <Text style={styles.chart_title}>Spending Timeline</Text>
              <LineChart style={{ height: 150 }} config={config4} xLabels={xlabels4} data={data4} />
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Balance/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default HomeScreen;