import React, { Component } from 'react';
import { Container } from 'native-base';

export default class Layout extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: 'transparent' }}>
                {this.props.children}
            </Container>
        );
    }
}