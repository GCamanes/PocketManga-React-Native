/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import AppContainer from './components/AppContainer';
import store from './redux/store';
import AppRouter from './rooter/app-router';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </Provider>
  );
};

export default App;
