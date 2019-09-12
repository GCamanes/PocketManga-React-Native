import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Reducer, Router } from 'react-native-router-flux';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AppRoutes from '../app/app.routes';

class AppRouter extends Component {
  reducerCreate = (params) => {
    const { dispatch } = this.props;

    const defaultReducer = new Reducer(params);
    return (state, action) => {
      dispatch(action);
      return defaultReducer(state, action);
    };
  };

  render() {
    const { children } = this.props;

    return (
      <Router scenes={AppRoutes} createReducer={this.reducerCreate}>
        {children}
      </Router>
    );
  }
}

AppRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

AppRouter.defaultProps = {
  children: <View />,
};

export default connect()(AppRouter);
