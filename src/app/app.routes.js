/**
 * App Navigation
 */
import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import AppConfig from './app.config';
import AppConstants from './app.constants';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';

/* Routes */
const AppRoutes = Actions.create(
  <Scene key="root" {...AppConfig.sceneProps}>
    <Scene key={AppConstants.ROUTES.HOME} component={HomePage} />
    <Scene key={AppConstants.ROUTES.USER_LOGIN} component={UserLoginPage} initial />
  </Scene>,
);

export default AppRoutes;
