import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import words from './../../shared/words'
import ListItem from './comps/ListItem'
import { createFlatListItems } from './../../Biz/utils'

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('home...');
    var items = [
      {
        type: '0',
        label: words.reminder,
        action: 'reminder'
      },
      {
        type: '1',
        label: words.drugTime,
        action: 'drug'
      },
      {
        key: '2',
        label: words.doctorTime,
        action: 'doctor'
      },
      {
        key: '3',
        label: words.exercise,
        action: 'exercise'
      }
    ];
     this.state = {list:createFlatListItems(items, { action: 'newReminder', icon: 'add', label: words.add })};
     console.log(this.state.list);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
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
