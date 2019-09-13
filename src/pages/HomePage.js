import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import AppConstants from '../app/app.constants';
import * as MangaActions from './../redux/actions/manga-actions';
import {AppColors} from '../theme';

class HomePage extends Component {
  componentDidMount() {
    const {getMangas} = this.props;
    getMangas();
  }

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus, mangas} = this.props;
    if (loadingStatus.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color={AppColors.palette.main.secondary}/>
        </View>
      );
    }
    return (
      <View>
        {mangas.map(item => (
          <Text>{item.name}</Text>
        ))}
      </View>
    );
  }
}

HomePage.propTypes = {
  getMangas: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  mangas: PropTypes.arrayOf(PropTypes.object.isRequired),
};

HomePage.defaultProps = {
  loadingStatus: {loading: false},
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  loadingStatus: state.app[AppConstants.ROUTES.HOME],
  mangas: state.manga.mangas,
});

export default connect(mapStateToProps, MangaActions)(HomePage);
