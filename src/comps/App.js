import React from 'react';
import { Router, Scene, Lightbox, Drawer } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

//routes
import Splash from './splash';
import Home from './home';
import Lightbox from './shared/lightBox';

export default class App extends React.Component {
  render() {
    const RouterWithRedux = connect()(Router);
    const store = appStore();
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene>
            <Scene key="root" hideNavBar>
              <Lightbox hideNavBar>
                <Scene hideNavBar>
                  <Drawer key="drawer"
                    contentComponent={SideMenu}
                    drawerPosition="right">
                    <Scene hideNavBar>
                      <Scene key="home" component={Home} title={words.Home} />
                    </Scene>
                  </Drawer>
                </Scene>
                <Scene key="lightBox" component={Lightbox} />
              </Lightbox>
            </Scene>
            <Scene key="splash" hideNavBar component={Splash} title="Splash" initial />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
