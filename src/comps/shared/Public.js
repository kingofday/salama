import React from 'react'
import { View, Container } from 'native-base';
import { StyleSheet,Platform } from 'react-native'

// const font = StyleSheet.create({
//     ...Platform.select({
//         ios: {
//             fontFamily: 'IRANSansMobile',
//             fontWeight: "500"
//         },
//         android: {
//             fontFamily: 'IRANSansMobile_Medium',
//         }
//     })
// });


export default class Layout extends React.Component {
    componentWillMount() {
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#ffffff' }}>
                {this.props.children}
            </Container>
        );
    }
}

export class CustomText extends React.Component {
    render() {
        return (
            <View>
            <Text>
            {this.props.child}
            </Text>
                {/* <Text style={[font, { fontSize: 14, color: '#666666' }, this.props.styles]}>
                    {this.props.child}
                </Text> */}
            </View>
        );
    }
}