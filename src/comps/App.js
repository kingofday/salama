import React from 'react';
import { Router, Scene, Stack, Lightbox, Drawer } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

//routes
import appStore from './../shared/store';
import Splash from './splash';
import Home from './home';
import Reminder from './reminder';
import PublicLightbox from './shared/lightBox';
import PublicDrawer from './shared/drawer';
import words from './../shared/words';
import type { Notification, NotificationOpen, assert } from 'react-native-firebase';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  componentDidMount(){
    firebase.notifications().getInitialNotification()
    .then((notificationOpen: NotificationOpen) => {
      if (notificationOpen) {
        // App was opened by a notification
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification: Notification = notificationOpen.notification;  
        console.log('got this')
      }
    });
  }

  render() {
    console.log('App...');
    const RouterWithRedux = connect()(Router);
    const store = appStore();
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene>
            <Lightbox hideNavBar>
              <Scene hideNavBar initial>
                <Scene key='root' hideNavBar>
                  {/* ======= Drawer ======= */}
                  <Drawer key="drawer"
                    contentComponent={PublicDrawer}
                    drawerPosition="right">

                    <Scene key="home" component={Home} title="home" initial hideNavBar />
                    <Scene key="reminder" component={Reminder} title="alarm info" hideNavBar />

                  </Drawer>
                </Scene>

                <Scene key="splash" component={Splash} title="Splash" hideNavBar initial />
              </Scene>
              {/* ======= LightBox ======= */}
              <Scene key="publicLightBox" component={PublicLightbox} title="light box" />

            </Lightbox>

          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}