import React from 'react'
import { Container, Text, Spinner } from 'native-base';
import { Platform } from 'react-native'

const font = {
    ...Platform.select({
        ios: {
            fontFamily: 'IRANSansMobile',
            fontWeight: "500"
        },
        android: {
            fontFamily: 'IRANSansMobile_Medium',
        }
    })
};


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
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text style={[font, { fontSize: 14, color: '#666666' }, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}