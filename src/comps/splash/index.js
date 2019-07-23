import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            console.log('splash...');
            Actions.replace("root");
        }, 2000)
    }
    _redirectToKingofday() {
        //Linking.openURL("http://www.kingofday.ir").catch((err) => console.error('An error occurred', err));
    }
    render() {
        return (
            <View>
                <Text>loading...</Text>
            </View>
        );
    }
}