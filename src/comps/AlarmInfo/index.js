import { Component } from 'react';
import { View } from 'native-base';
import Layout, { CustomText } from './../shared/Public'
import styles from './../shared/styles'
import words from './../../shared/words'

export default class AlarmInfo extends Component {

    render() {
        return (
            <View style={[styles.centericView]}>
                <CustomText style={{fontSieze:16,marginBottom:15}}>
                    {this.props.time}
                </CustomText>
                <CustomText style={{fontSieze:14,marginBottom:15}}>
                    {this.props.AlarmBody}
                </CustomText>
            </View>
        )
    }
}