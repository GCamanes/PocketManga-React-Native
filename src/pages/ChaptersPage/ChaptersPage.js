import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppConstants from '../../app/app.constants';
import * as MangaActions from '../../redux/actions/manga-actions';
import { ActivityIndicator, View } from 'react-native';
import { AppColors, AppStyles } from '../../theme';

class ChaptersPage extends Component {
  render() {
    const {manga, loadingStatus} = this.props;
    if (loadingStatus.loading) {
      return (
        <View style={AppStyles.loadingView}>
          <ActivityIndicator
            size="large"
            color={AppColors.palette.main.secondary}
          />
        </View>
      );
    }
    return null;
  }
}

ChaptersPage.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.object),
  loadingStatus: PropTypes.object,
  manga: PropTypes.string.isRequired,
};

ChaptersPage.defaultProps = {
  chapters: [],
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  loadingStatus: state.app[AppConstants.ROUTES.CHAPTERS],
  chapters: state.chapter.chapters,
});

export default connect(mapStateToProps, null)(ChaptersPage);
