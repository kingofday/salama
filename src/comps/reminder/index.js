import React from "react";
import { View } from 'native-base';
import Layout, { CustomText } from '../shared/Public'
import words from '../../shared/words'
import alarm from './../../Biz/alarm';
import Header from './Header'

export default class Reminder extends React.Component {
    componentDidMount(){
      console.log('reminder...')
      alarm.create({type:'0',title:'سلاما',body:'وقت خوردن قرص'})
      //alarm.fake();
    }
    render() {
        return (
            <Layout style={{ flex: 1 }}>
              <Header title={words.reminder} />
              {/* <FlatList data={this.state.list}
                renderItem={(i) => <ListItem model={i} />} /> */}
            </Layout>
          );
    }
}