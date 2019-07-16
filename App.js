import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Settings } from 'react-native';
import type { Notification, NotificationOpen,assert} from 'react-native-firebase';
import firebase from 'react-native-firebase';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {

  componentDidMount(){

    //var s = Uri.parse(ContentResolver.SCHEME_ANDROID_RESOURCE + "://" + context.getPackageName() + "/");

    // if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
    
    //         NotificationChannel mChannel = new NotificationChannel("YOUR_CHANNEL_ID",
    //             "YOUR CHANNEL NAME",
    //             NotificationManager.IMPORTANCE_DEFAULT)
    
    //         AudioAttributes attributes = new AudioAttributes.Builder()
    //                 .setUsage(AudioAttributes.USAGE_NOTIFICATION)
    //                 .build();
    
    //         NotificationChannel mChannel = new NotificationChannel(CHANNEL_ID, 
    //                 context.getString(R.string.app_name),
    //                 NotificationManager.IMPORTANCE_HIGH);
    
    //         // Configure the notification channel.
    //         mChannel.setDescription(msg);
    //         mChannel.enableLights(true);
    //         mChannel.enableVibration(true);
    //         mChannel.setSound(sound, attributes); // This is IMPORTANT
    
    
    //         if (mNotificationManager != null)
    //             mNotificationManager.createNotificationChannel(mChannel);
    //     }


    // var importance = NotificationManager.IMPORTANCE_HIGH;
    // var notificationChannel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, "NOTIFICATION_CHANNEL_NAME", importance);
    // notificationChannel.enableLights(true);
    // notificationChannel.setLightColor(Color.RED);
    // notificationChannel.enableVibration(true);
    // notificationChannel.setVibrationPattern(new long[]{100, 200, 300, 400, 500, 400, 300, 200, 400});
    // assert mNotificationManager != null;
    // mBuilder.setChannelId(NOTIFICATION_CHANNEL_ID);
    // mNotificationManager.createNotificationChannel(notificationChannel);
// Build a channel
const channel = new firebase.notifications.Android.Channel('test-channel8', 'Test Channel8', firebase.notifications.Android.Importance.Max)
  .setDescription('My apps test channel')
  .enableVibration(true)
  .setSound('first.wav');

// Create the channel
firebase.notifications().android.createChannel(channel);

    const notification = new firebase.notifications.Notification()
    .setNotificationId('notificationId')
    .setTitle('بده دو ')
    //.setBody('بده دو')
    .setSound(channel.sound)
    .setData({
      key1: 'value1',
      key2: 'value2',
    })
    .android.setLargeIcon('ic_launcher')
    .android.setChannelId(channel.channelId).setSound(channel.sound)
    //.android.setTimeoutAfter(30000);
    firebase.notifications().displayNotification(notification)
    const date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    // console.log(date);
    // firebase.notifications().scheduleNotification(notification, {
    //     fireDate: date.getTime(),
    //     //'repeatInterval':'minute'
    // })
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
      console.log('on notif');
  });

  firebase.messaging().onMessage(message => {
    console.log('messaging:message: ', message);
    // Process your message as required
  });

  }

  render() {
    return (
      <View style={{flex:1,flexDirection: 'row',}}>
        <View style={{flex:0.5,backgroundColor:'green'}}>
            <Text style={{color:'#ffffff',fontSize:30}}>سلام بر دنیا...</Text>
        </View>
        <View style={{flex:0.5,backgroundColor:'red'}}>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
