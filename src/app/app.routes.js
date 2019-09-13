/**
 * App Navigation
 */
import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import AppConfig from './app.config';
import AppConstants from './app.constants';
import HomePage from '../pages/HomePage';
import LogoutButton from '../components/LogoutButton';
import UserLoginPage from '../pages/UserLoginPage/UserLoginPage';

/* Routes */
const AppRoutes = Actions.create(
  <Scene key="root" {...AppConfig.sceneProps}>
    <Scene key={AppConstants.ROUTES.HOME} component={HomePage} title={"Pocket Manga"} renderLeftButton={<LogoutButton/>} />
    <Scene key={AppConstants.ROUTES.USER_LOGIN} component={UserLoginPage} hideNavBar initial />
  </Scene>,
);

export default AppRoutes;
