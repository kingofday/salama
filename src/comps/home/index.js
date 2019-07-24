import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import words from '../../shared/constats'
import ListItem from './ListItem'
import { createFlatListItems } from './../../Biz/utils'
import Layout from './../shared/Public';
import Header from './Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    var items = [
      {
        type: '0',
        label: words.reminder,
        action: 'reminder',
        url: require("./../../assets/images/alarm.png")
      },
      {
        type: '1',
        label: words.drugTime,
        action: 'drug',
        url: require("./../../assets/images/alarm.png")
      },
      {
        key: '2',
        label: words.doctorTime,
        action: 'visit',
        url: require("./../../assets/images/alarm.png")
      },
      {
        key: '3',
        label: words.exercise,
        action: 'exercise',
        url: require("./../../assets/images/alarm.png")
      }
    ];
    this.state = { list: createFlatListItems(items) };
  }

  render() {
    return (
      <Layout style={{ flex: 1 }}>
        <Header title={words.salama} />
        <FlatList data={this.state.list}
          renderItem={(i) => <ListItem model={i} />} />
      </Layout>
    );
  }
}

// const mapStateToProps = state => {
//   return { ...state };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     //setIds: (ids) => { dispatch(setIds(ids)); },

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
