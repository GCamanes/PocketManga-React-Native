import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import assets from './../../assets';
import styles from './userLoginPage.styles';
import * as UserActions from '../../redux/actions/user-actions';
import { AppColors } from '../../theme';

class UserLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: '',
      userPassword: '',
      userRemember: false,
    };
  }

  login = () => {
    const {login} = this.props;
    login(this.state);
  }

  onToggleSwitchRememberMe = value => {
    this.setState({userRemember: value});
  };

  /**
   * Render function to display component.
   */
  render() {
    return (
      <ImageBackground source={assets.loginBackgroundOP} style={styles.backgroundImage}>
        <View style={styles.container}>
          <TextInput
            value={this.state.userMail}
            onChangeText={userMail => this.setState({userMail})}
            placeholder="Mail"
            selectionColor={AppColors.palette.main.secondary}
            keyboardType="email-address"
            style={styles.input}
            autoCapitalize="none"
          />
          <TextInput
            value={this.state.userPassword}
            onChangeText={userPassword => this.setState({userPassword})}
            placeholder="Password"
            selectionColor={AppColors.palette.main.secondary}
            secureTextEntry={true}
            style={styles.input}
            autoCapitalize="none"
          />
          <View style={styles.rememberUserView}>
            <Text style={styles.rememberUserText}>Remember me ?</Text>
            <Switch
              onValueChange={this.onToggleSwitchRememberMe}
              value={this.state.userRemember}
              trackColor={{true: AppColors.palette.main.primary}}
              thumbColor={AppColors.palette.black}
            />
          </View>

          <TouchableOpacity
            style={styles.loginView}
            onPress={this.login}
          >
            <Text style={styles.loginText}>GO !</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(null, UserActions)(UserLoginPage);
