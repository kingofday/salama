import React, { Component } from 'react';
import { Content, Button } from 'native-base'
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';

import words from '../../shared/constats'
import Layout, { CustomText } from './../shared/Public';

export default class Notif extends Component {

  _confirm(notif) {
    firebase.notifications().cancelNotification(notif.data.id);
  }
  render() {
    const notif = this.props.notif;
    console.log('notif:');
    console.log(notif);
    return (
      <Layout style={{ flex: 1 }}>
        <Content>
          <CustomText>{notif.data.body}</CustomText>
          <Button bordered info onPress={() => { this._confirm(notif); }}>
            <CustomText>{words.confirm}</CustomText>
          </Button>
        </Content>
      </Layout>
    );
  }
}
