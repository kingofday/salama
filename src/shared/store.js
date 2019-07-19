import { createStore } from 'redux';
import { combineReducers } from 'redux';

//comps
import homeReducer from './../comps/home/reducer';
//import resultReducer from '../components/result/reducer';

const appReducers = combineReducers({
   homeReducer,
})

const appStore = () => {
  return createStore(appReducers);
}

export default appStore;