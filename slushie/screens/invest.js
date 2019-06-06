import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import TxnTable from '../txnTable';
import styles from '../styles';
import LineChart from "react-native-responsive-linechart";

class InvestScreen extends React.Component {

  render() {
    const data3 = [15,18,16,19,18,16,23];
    const xlabels3 = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];
    const config3 = {
      interpolation: "spline",
      line: { strokeColor: "#be2ddd", strokeWidth: 2 },
      yAxis: {
        visible: true,
        labelFormatter: v =>  " " + String(Math.round(parseInt(v))) + "k",
      },
      xAxis: {
        visible: true,
      },
      area: {
        visible: false,
      },
      grid: { visible: false }
    };

    return (
      <ScrollView style={styles.pageContainer}>
          <Text style={styles.pageSubTitle}>
            Investing
          </Text>
        <View style={{alignContent: 'center',paddingLeft: 20}}>
          
          <LineChart style={{ height: 150, width:300 }} config={config3} xLabels={xlabels3} data={data3} />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.chart_title}>
                Your Transactions
            </Text>
            <TxnTable/>
          </View>
        </View>

      </ScrollView>
      
    );
  }
}

export default InvestScreen;