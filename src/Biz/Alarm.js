//import firebase from 'react-native-firebase';
import type { Notification, NotificationOpen, assert } from 'react-native-firebase';
import firebase from 'react-native-firebase';
import getId from './utils'

export default class alarm {

    static create({ type, title, body, date, repeat }) {
        var init = function () {
            var id = getId();
            console.log('chera');
            //======== step1:init channel
            const channel = new firebase.notifications
                .Android.Channel(`ch_${id}`, `name_${id}`, firebase.notifications.Android.Importance.Max)
                .setDescription(`desc_${type}`)
                .enableVibration(true)
                .setSound('alarm1.wav');
            //======== step2:create channel
            firebase.notifications().android.createChannel(channel);
            //======== step3:init notif
            const notification = new firebase.notifications.Notification()
                .setNotificationId(`notif_${id}`)
                .android.setChannelId(channel.channelId)
                .setSound(channel.sound)
                .android.setLargeIcon('ic_launcher')
                .setTitle(title)
                .setBody(body)
                .setSound(channel.sound)
                .setData({
                    id: id,
                    type: type,
                });
            //firebase.notifications().displayNotification(notification)
            const date = new Date();
            date.setSeconds(date.getSeconds() + 30);
            console.log('scheduling...');
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
                //Actions.alarmInfo();
            });
        };

        firebase.messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    init();
                } else {
                    firebase.messaging().requestPermission()
                        .then(() => {
                            init();
                        })
                        .catch(error => {
                            // User has rejected permissions  
                        });
                }
            });
    }

    static fake() {

        console.log('fake ...');
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
        date.setSeconds(date.getSeconds() + 20);
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
}
