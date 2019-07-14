import React from 'react';
import { Header, Title, Button, Right, Left, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
//cpmps
import styles from './styles'

export default class Index extends React.Component {
    render() {
        return (<Header style={styles.header}>
            <Left style={styles.left}>
                <Button transparent onPress={() => Actions.drawerOpen()}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body style={styles.body}>
                <Title style={[commonStyles.fontFa, { fontSize: 14 }]}>{this.props.title}</Title>
            </Body>
            <Right style={styles.right} />
        </Header>);
    }
}