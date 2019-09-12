import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import {AppColors} from '../theme';

class AppContainer extends Component {
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
          <View style={{flex: 1, backgroundColor: AppColors.palette.white}}>
            {/* Main content */}
            { children }
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.any,
};

AppContainer.defaultProps = {
  children: [],
};

export default connect()(AppContainer);
