import React from 'react';
import { Router, Scene, Stack, Lightbox, Drawer } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

//routes
import appStore from './../shared/store';
import Splash from './splash';
import Home from './home';
import AlarmInfo from './AlarmInfo';
import PublicLightbox from './shared/lightBox';
import PublicDrawer from './shared/drawer';
import words from './../shared/words';

export default class App extends React.Component {
  render() {
    console.log('App...');
    const RouterWithRedux = connect()(Router);
    const store = appStore();
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene hideNavBar initial>
            <Stack key="root" hideNavBar>
               <Scene key="alarmInfo" component={AlarmInfo} title="alarm info" /> 
              <Scene key="home" component={Home} title="home" initial />
            </Stack>
            <Scene key="splash" component={Splash} title="Splash" initial />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}