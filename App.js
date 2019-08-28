import React, { useEffect } from 'react';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';

import { store } from './store';

//import AppNavigator from './AppNavigator';

import Home from './views/home';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
