import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import words from './../../shared/words'
import Layout, { CustomText } from './../shared/Public';
import Header from './Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('info ...');
  }
  render() {
    return (
      <Layout style={{ flex: 1 }}>
        <Header title={words.salama} />
        <View>
          <CustomText>اطلاعات نوتیف</CustomText>
        </View>
      </Layout>
    );
  }
}