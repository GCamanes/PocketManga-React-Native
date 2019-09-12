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

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Text>HELLO WORLD !</Text>
      </AppContainer>
    </Provider>
  );
};

export default App;
