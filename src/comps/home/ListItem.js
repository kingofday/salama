import React, { Component } from 'react';
import { View, Item, Icon } from 'native-base';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
//Comps
import words from '../../shared/words';
import { CustomText } from '../shared/Public';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    section: {
        borderWidth: 1,
        borderColor: '#16a085',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 120,
        backgroundColor:'#1abc9c'
    },
    label: {
        paddingTop: 10,
        paddingBottom: 10,
        color:'#fff'
    },
    icon: {
        fontSize: 20,
        color:'#fff'
    }
});

class Section extends React.Component {
    render() {
        const item = this.props.item;
        const full = this.props.full;
        return (
            <View style={{ flex: full ? 1 : 0.5 }} padder>
                <TouchableOpacity style={styles.section} onPress={() => { Actions[item.action](); }}>
                    <Image source={item.url} />
                    <CustomText style={styles.label}>
                        {item.label}
                    </CustomText>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class ListItem extends React.Component {
    componentWillMount() {

    }
    render() {
        var row = this.props.model.item;
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {row.cols.map(i => <Section item={i} key={i.key} full={row.cols.length === 1} />)}
            </View>
        );

    }
}

