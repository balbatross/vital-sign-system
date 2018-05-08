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
import Recorder from './src/components/recorder';
import Viewer from './src/components/viewer';
type Props = {};
export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: 'recorder',
        }
    }

    _renderView(){
        if(this.state.view == 'recorder'){
            return (<Recorder />);
        }else{
            return null;
        }
    }

    flipView(){
        if(this.state.view == 'recorder'){
            this.setState({view: 'viewer'});
        }else{
            this.setState({view: 'recorder'});
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.1, height: 50, backgroundColor: '#EE82EE', alignItems: 'center', justifyContent: 'center'}}>
            <Text>3DHB Vital Sign Monitoring</Text>
        </View>
            {this._renderView()}
        <View style={{flex: 0.1}}>
            <Button title={(this.state.view == 'recorder') ? "View results" : "Record Vitals"} onPress={this.flipView.bind(this)} />
        </View>
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
