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
import AppConstants from '../app/app.constants';
import * as MangaActions from './../redux/actions/manga-actions';

class HomePage extends Component {
  componentDidMount() {
    const {getMangas} = this.props;
    getMangas();
  }

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

HomePage.propTypes = {
  getMangas: PropTypes.func.isRequired,
  mangas: PropTypes.arrayOf(PropTypes.object.isRequired),
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  mangas: state.manga.mangas,
});

export default connect(mapStateToProps, MangaActions)(HomePage);
