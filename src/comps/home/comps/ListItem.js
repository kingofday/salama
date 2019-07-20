import React, { Component } from 'react';
import { View, Item, Text, Left, Right, CheckBox } from 'native-base';
import { TouchableOpacity } from 'react-native'

//Comps
import words from '../../../shared/words';
import { CustomText } from './../../shared/Public';

export default class ListItem extends React.Component {
    componentWillMount() {
        this.setState({ selected: false });
    }
    _selectCost() {
        this.props.onPressItem(this.props.item.id, !this.state.selected);
        this.setState(prev => ({ ...prev, selected: !prev.selected }))
    }
    render() {
        var items = this.props.arr.item;
        console.log(model);
        if (items.length == 0) {
                return <View>
                    <Text>OK</Text>
                </View>
        }
        else return (
            <Item style={{ flex: 0.5 }} key={model.key}>
                <TouchableOpacity style={{ backgroundColor: 'red' }}>
                    <CustomText>
                        {model.label}
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red' }}>
                    <CustomText>
                        {model.label}
                    </CustomText>
                </TouchableOpacity>
            </Item>
        );

    }
}