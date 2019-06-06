import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import data from './d3chart/data';
 
export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Amount', 'Category'],
      tableData: []
    }
  }

  getData() {
    txns = data.spendingsLastMonth; 
    for(i = 0; i < 20; i++) {
        let row = []
        let date = txns[i].date;
        let amount = txns[i].amount;
        let cat = txns[i].category;
        row.push(date);
        row.push(amount);
        row.push(cat);
        this.tableData.push(row);
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
}