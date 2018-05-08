import React, {
    Component
} from 'react';

import {
    View,
    Text,
    AsyncStorage
} from 'react-native';

type Props = {};
export default class Viewer extends Component {

    constructor(props){
        super(props);
        this.state = {
            keys: []
        }
    }

    componentWillMount(){
        console.warn("MOUNT");
        AsyncStorage.getAllKeys((err, keys) => {
            if(err) console.warn(err);
            this.setState({keys: keys});
        });
    }

    render(){
        return(
            <View style={{flex: 1}}>

            </View>
        );
    }
}
