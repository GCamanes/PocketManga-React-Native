import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import * as UserActions from '../redux/actions/user-actions';
import { AppColors } from '../theme';

class UserLoginPage extends Component {

  login = () => {
    const { login } = this.props;
    login({test: 'testeee'});
  }

  /**
   * Render function to display component.
   */
  render() {
    return (
      <TouchableOpacity onPress={this.login} style={{backgroundColor: AppColors.palette.blue}}>
        <Text>LOGIN !</Text>
      </TouchableOpacity>
    );
  }
}

export default connect(null, UserActions)(UserLoginPage);
