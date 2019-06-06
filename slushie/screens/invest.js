import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import styles from '../styles';
import LineChart from "react-native-responsive-linechart";
import BigButton from '../bigButton';

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
          <Text style={styles.sidePageTitle}>
            Your Investments
          </Text>
        <View style={{alignContent: 'center',paddingLeft: 20}}>
          
          <LineChart style={{ height: 150, width:300 }} config={config3} xLabels={xlabels3} data={data3} />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
          <Text style={styles.chart_title}>
              Slushie's Suggestions
            </Text>
            <Text style={styles.suggestion}>
              Based on your previous spending, Slushie recommends you move 
            </Text>
            <Text style={styles.suggestionAccent}>
              $402.91
            </Text>
            <Text style={styles.suggestion}>
              {'into your savings account. \nThis leaves you with'}
            </Text>
            <Text style={styles.suggestionAccent}>
              $7824.54
            </Text>
            <Text style={styles.suggestion}>
              in your checking account. 
            </Text>

            <BigButton label="Transfer  Now"/>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            
          </View>
        </View>

      </ScrollView>
      
    );
  }
}

export default InvestScreen;