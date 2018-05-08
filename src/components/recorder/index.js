/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';


type Props = {};
export default class Recorder extends Component {

    constructor(props){
        super(props);
        this.state = {
            patient: {nhi: '', pulse: '', temperature: '', oxygen: '', breath: '' }
        }
    }

    record(){
        var patient = this.state.patient;
        AsyncStorage.setItem('@Patient:' + patient.nhi, JSON.stringify(patient)).then(() => {
            this.setState({patient: {}});
        });
    }

    mapChange(key, value){
        var patient = this.state.patient;
        patient[key] = value;
        this.setState({patient: patient});
    }

  render() {
    return (
        <View style={{flex: 1}}>
            <TextInput placeholder="Patient Name/NHI" value={this.state.patient.nhi}  onChangeText={(e) => this.mapChange('nhi', e)} />
            <TextInput placeholder="Pulse" value={this.state.patient.pulse} onChangeText={(e) => this.mapChange('pulse', e)} />
            <TextInput placeholder="Temperature" value={this.state.patient.temperature} onChangeText={(e) => this.mapChange('temperature', e)} />
            <TextInput placeholder="Oxygen saturation" value={this.state.patient.oxygen} onChangeText={(e) => this.mapChange('oxygen', e)} />
            <TextInput placeholder="Breathing rate" value={this.state.patient.breath}  onChangeText={(e) => this.mapChange('breath', e)} />
            <TextInput placeholder="Blood pressure" value={this.state.patient.bloodpressure} onChangeText={(e) => this.mapChange('bloodpressure', e)} />  
            <Button title="Record" onPress={this.record.bind(this)} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
