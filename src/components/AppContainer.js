import NetInfo from '@react-native-community/netinfo';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import * as AppActions from '../redux/actions/app-actions';

import {AppColors} from '../theme';

class AppContainer extends Component {
  componentDidMount() {
    const {updateConnectivity} = this.props;
    NetInfo.addEventListener(state =>
      updateConnectivity(state.isInternetReachable),
    );
  }

  /**
   * Render function to display component.
   */
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor={AppColors.palette.black}/>
        <SafeAreaView style={{flex: 0, backgroundColor: AppColors.palette.black}} />
        <SafeAreaView style={{flex: 1, backgroundColor: AppColors.palette.black}}>
          {/* Main content */}
          { children }
        </SafeAreaView>
      </Fragment>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.any,
  updateConnectivity: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  children: [],
};

export default connect(null, AppActions)(AppContainer);
