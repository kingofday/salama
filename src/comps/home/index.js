import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import type { Notification, NotificationOpen } from 'react-native-firebase';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import words from './../../shared/words'

class Home extends Component {
  componentDidMount() {
    this.state.items = [
      {
        type: 0,
        label: words.reminder,
        action: 'reminder'
      },
      {
        type: 1,
        label: words.drugTime,
        action: 'reminder'
      },
      {
        type: 2,
        label: words.doctorTime,
        action: 'reminder'
      }
    ];
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <FlatList data={this.state.items}
         renderItem= />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = dispatch => {
  return {
    //setIds: (ids) => { dispatch(setIds(ids)); },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
