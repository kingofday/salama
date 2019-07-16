import React from 'react'
import { View, StyleSheet } from 'react-native'

const font = StyleSheet.create({
    ...Platform.select({
        ios: {
            fontFamily: 'IRANSansMobile',
            fontWeight: "500"
        },
        android: {
            fontFamily: 'IRANSansMobile_Medium',
        }
});

export default class CustomText extends React.Component {
    render() {
        return (
            <View>
                <Text style={[font,{fontSize:20},this.props.styles]}>{this.props.child}</Text>
            </View>
        );
    }
}