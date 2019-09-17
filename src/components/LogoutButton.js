import React, {Component} from 'react';
import {TouchableOpacity, Image, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import assets from '../assets';
import * as UserActions from '../redux/actions/user-actions';

export class LogoutButton extends Component {
  onDisconnectPress() {
    const {logout} = this.props;
    logout();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Warning', 'Do you want to logout ?', [
            {text: 'NO', onPress: () => false, style: 'cancel'},
            {text: 'YES', onPress: () => this.onDisconnectPress()},
          ]);
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            marginStart: 10,
          }}
          source={assets.logout}
        />
      </TouchableOpacity>
    );
  }
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(
  null,
  UserActions,
)(LogoutButton);
