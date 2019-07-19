import { View, Text } from 'native-base'
import { Component } from 'react'

export default class Reminder extends Component{

    componentDidMount() {
        console.log('home...');
        const channel = new firebase.notifications.Android.Channel('test-channel20', 'Test Channe20', firebase.notifications.Android.Importance.Max)
          .setDescription('My apps test channel')
          .enableVibration(true)
          .setSound('alarm1.wav');
    
        // Create the channel
        firebase.notifications().android.createChannel(channel);
    
        const notification = new firebase.notifications.Notification()
          .setNotificationId('notificationId')
          .android.setChannelId(channel.channelId)
          .setSound(channel.sound)
          .android.setLargeIcon('ic_launcher')
          .setTitle('وقتش رسیده')
          .setBody('بده دو')
          .setSound(channel.sound)
          .setData({
            key1: 'value1',
            key2: 'value2',
          });
        //.android.setTimeoutAfter(30000);
        //firebase.notifications().displayNotification(notification)
        const date = new Date();
        date.setMilliseconds(date.getMilliseconds() + 55);
        console.log(date);
        firebase.notifications().scheduleNotification(notification, {
          fireDate: date.getTime(),
          //'repeatInterval':'minute'
        })
        firebase.notifications().onNotificationOpened((notification) => {
          // Process your notification as required
          console.log('opened');
        });
    
        firebase.notifications().onNotificationDisplayed((notification) => {
          // Process your notification as required
          console.log('displayed');
        });
    
        firebase.notifications().onNotification((notification) => {
          // Process your notification as required
          console.log('home-> on notif');
          Actions.alarmInfo();
        });
    
        firebase.messaging().onMessage(message => {
          console.log('messaging:message: ', message);
          // Process your message as required
        });
    
      }

    render(){
        return(
            <View>
                <Text>
                    Set Reminder
                </Text>
            </View>
        );
    }
}