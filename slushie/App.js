import React, { Component } from 'react';
import Main from './Main';
import Onboard from './Onboard';

import { StyleSheet, View, Text, Platform } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    doneOnboarding() {
        this.setState( {
            showOnboard: false,
        })
    }

    componentWillMount() {
        this.setState({
            showOnboard : false
        });
    }

    render () {
        if (this.state.showOnboard) {
            return (
                <Onboard setState={p=>{this.setState(p)}}/>
            )
        }
        else {
            return (
                <Main/>
            )
        }
    }
}