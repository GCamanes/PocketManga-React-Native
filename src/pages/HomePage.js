import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class HomePage extends Component {
  /**
   * Render function to display component.
   */
  render() {
    return (
      <View>
        <Text>MY HOME !</Text>
      </View>
    );
  }
}

export default connect()(HomePage);
