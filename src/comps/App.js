import React from 'react';
import { Router, Scene, Stack, Lightbox, Drawer, Actions } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import type { Notification, NotificationOpen, assert } from 'react-native-firebase';
import firebase from 'react-native-firebase';

//comps
import appStore from './../shared/store';
import Splash from './splash';
import Home from './home';
import Reminder from './reminder';
import PublicLightbox from './shared/lightBox';
import PublicDrawer from './shared/drawer';
import words from '../shared/constats';
import Notif from './notif';

export default class App extends React.Component {
  componentDidMount() {
    firebase.notifications().getInitialNotification()
      .then((notificationOpen: NotificationOpen) => {
        if (notificationOpen) {
          Actions.replace('notif', { info: notificationOpen });

        }
      });
  }

  render() {
    // const RouterWithRedux = connect((state) => ({ ...this.state }))(Router);
    // const store = appStore();
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="splash" component={Splash} title="Splash" hideNavBar initial />
          <Stack key='routes' hideNavBar>
            <Scene key='home' component={Home} title="home" initial hideNavBar />
            <Scene key="reminder" component={Reminder} title="alarm info" hideNavBar />
            <Scene key="notif" component={Notif} title="alarm info" hideNavBar />
          </Stack>
        </Stack>
      </Router>
      // <Provider store={store}>
      // <RouterWithRedux>
      // <Stack>
      //   <Stack key="root" hideNavBar>
      //     <Lightbox hideNavBar initial>
      //       <Stack hideNavBar initial>
      //         <Drawer key="drawer"
      //           contentComponent={PublicDrawer}
      //           initial
      //           drawerPosition="right">
      //           <Stack initial wrap={false}>
      //               <Scene component={Home} title="home" initial hideNavBar />
      //             {/* <Scene key="reminder" component={Reminder} title="alarm info" hideNavBar />
      //             <Scene key="notif" component={Notif} title="alarm info" hideNavBar /> */}
      //           </Stack>
      //         </Drawer>
      //       </Stack>
      //       <Scene key="publicLightBox" component={PublicLightbox} title="light box" />
      //     </Lightbox>
      //   </Stack>
      //   <Scene key="splash" component={Splash} title="Splash" hideNavBar initial />
      // </Stack>
      //   </RouterWithRedux>
      // </Provider>
    );
  }
}