import React, { Component } from 'react';
import { View, Item, Text, Left, Right, CheckBox } from 'native-base';
import { TouchableOpacity } from 'react-native'

//Comps
import words from '../../../shared/words';
import { CustomText } from './../../shared/Public';

class Section extends React.Component {
    render() {
        const item = this.props.item;
        console.log(item);
        return (
            <View style={{ flex: 0.5 }} padder>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#666' }} >
                    <CustomText>
                        OK
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
        var model = this.props.model.item;
        console.log(model);
        return (
            <Item style={{ flex: 1 }} padder>
                {model.arr.map(i => <Section item={i} key={i.key} />)}
            </Item>
        );

    }
}

