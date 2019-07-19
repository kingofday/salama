//import firebase from 'react-native-firebase';
import type { Notification, NotificationOpen, assert } from 'react-native-firebase';
import firebase from 'react-native-firebase';
import { getId } from './utils'

export default class alarm {

    static create({type, title, body, date, repeat }) {
        var id = getId();
        firebase.messaging().requestPermission()
            .then(() => {
                const channel = new firebase.notifications
                    .Android.Channel(`ch_${id}`, `name_${id}`, firebase.notifications.Android.Importance.Max)
                    .setDescription(`desc${type}`)
                    .enableVibration(true)
                    .setSound('alarm1.wav');

                firebase.notifications().onNotification((notification: Notification) => {
                    // Process your notification as required
                });

            })
            .catch(error => {
                // User has rejected permissions  
            });

    }
}