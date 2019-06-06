import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import data from './d3chart/data';
import styles from './styles';
 
export default class TxnTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Amount', 'Category'],
      tableData: []
    }
    
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    txns = data.tableData; 
    finalData = []
    for(i = 0; i < 20; i++) {
        let row = []
        let date = txns[i].date;
        let amount = txns[i].amount;
        let cat = txns[i].category;
        row.push(date);
        row.push(amount);
        row.push(cat);
        finalData.push(row)
    }
    this.setState({
      tableData: finalData,
    })
  }

  render() {
    const tstyles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      head: { height: 40, backgroundColor: '#f1f8ff' },
      text: { margin: 6 }
    });

    const state = this.state;

    const listItems = data.tableData.map((row,index) =>
      <View style={styles.txRow} key={index}>
        <View>
          <Text>
            {row.date.toString().padStart(12)  + row.amount.toString().padStart(15) + row.category.toString().padStart(25)}
          </Text>
        </View>
      </View>
    );

    return (
      <View style={tstyles.container}>
        <ScrollView>
         {listItems}
        </ScrollView>
      </View>
    )
  }
}