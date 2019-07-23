import React from 'react';

import { Header, Title, Right, Left, Body, Icon } from 'native-base';
import { CustomText } from './../shared/Public';

const color = '#fff';
export default class ReminderHeader extends React.Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#16a085' }}>
                <Left style={{ flex: 0.4, padding: 7.5 }}>
                    <Icon name='menu' style={{ color: color }} />
                </Left>
                <Body style={{ flex: 0.2, alignItems: 'center' }}>
                    <Title>
                        <CustomText style={{ color: color }}>{this.props.title}</CustomText>
                    </Title>
                </Body>
                <Right style={{ flex: 0.4, padding: 7.5 }}>
                </Right>

            </Header>);
    }
}