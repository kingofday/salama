import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

//comps


export default class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            console.log('splash...');
            Actions.reset("root");
        }, 1000)
    }
    _redirectToKingofday() {
        //Linking.openURL("http://www.kingofday.ir").catch((err) => console.error('An error occurred', err));
    }
    render() {
        return (
            <View>
                <Text>OK</Text>
            </View>
        );
    }
}