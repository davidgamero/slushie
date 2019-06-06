import React, { Component } from 'react';
import Main from './Main';

import { StyleSheet, View, Text, Platform } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Main/>
        )
    }
}