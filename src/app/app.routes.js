/**
 * App Navigation
 */
import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import AppConfig from './app.config';
import AppConstants from './app.constants';
import ChaptersPage from '../pages/ChaptersPage/ChaptersPage';
import HomePage from '../pages/HomePage';
import LogoutButton from '../components/LogoutButton';
import PageCount from '../components/PageCount';
import ScansPage from '../pages/ScansPage/ScansPage';
import UserLoginPage from '../pages/UserLoginPage/UserLoginPage';

/* Routes */
const AppRoutes = Actions.create(
  <Scene key="root" {...AppConfig.sceneProps}>
    <Scene key={AppConstants.ROUTES.CHAPTERS} component={ChaptersPage} />
    <Scene key={AppConstants.ROUTES.HOME} component={HomePage} title="Pocket Manga v1.0.1" renderLeftButton={<LogoutButton/>} />
    <Scene key={AppConstants.ROUTES.USER_LOGIN} component={UserLoginPage} hideNavBar initial />
    <Scene key={AppConstants.ROUTES.SCANS} component={ScansPage} renderRightButton={<PageCount/>} />
  </Scene>,
);

export default AppRoutes;
