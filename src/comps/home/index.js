import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import words from './../../shared/words'
import ListItem from './comps/ListItem'

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('home...');
    this.state = {
      list: [{
        key: '0',
        arr: [{
          key: '0',
          label: words.reminder,
          action: 'reminder'
        },
        {
          key: '1',
          label: words.drugTime,
          action: 'drug'
        }],
      },
      {
        key: '1',
        arr: [{
          key: '2',
          label: words.doctorTime,
          action: 'doctor'
        },
        {
          key: '3',
          label: words.doctorTime,
          action: 'exercise'
        }]
      }]
    };
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <FlatList data={this.state.list}
          renderItem={(i) => <ListItem model={i} />} />
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
