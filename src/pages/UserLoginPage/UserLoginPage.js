import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import assets from '../../assets';
import styles from './userLoginPage.styles';
import * as UserActions from '../../redux/actions/user-actions';
import {AppColors} from '../../theme';

class UserLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: '',
      userPassword: '',
      userRemember: false,
    };
  }

  componentDidMount() {
    const {initLoginPage} = this.props;
    const callback = (userMail, userPassword) => {
      this.setState({
        userMail,
        userPassword,
        userRemember: userMail !== '' ? true : false,
      });
    };
    initLoginPage(callback);
  }

  login = () => {
    const {connectivity, login} = this.props;
    const {userMail, userPassword, userRemember} = this.state;
    if (connectivity) {
      if (userMail !== '' && userPassword !== '') {
        login(this.state);
      } else {
        Alert.alert('Warning', 'Please give a mail and a password.');
      }
    } else {
      Alert.alert('Warning', 'No internet connection.');
    }
  }

  onToggleSwitchRememberMe = value => {
    this.setState({userRemember: value});
  };

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus} = this.props;
    return (
      <ImageBackground source={assets.loginBackground} style={styles.backgroundImage}>
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

          <TouchableOpacity style={styles.loginView} onPress={this.login}>
            {loadingStatus.loading && (
              <ActivityIndicator
                size="large"
                color={AppColors.palette.main.primary}
                style={{height: 40}}
              />
            )}
            {!loadingStatus.loading && (
              <Text style={styles.loginText}>GO !</Text>
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

UserLoginPage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  initLoginPage: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  login: PropTypes.func.isRequired,
};

UserLoginPage.defaultProps = {
  loadingStatus: {loading: false},
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.USER_LOGIN],
});

export default connect(
  mapStateToProps,
  UserActions,
)(UserLoginPage);
