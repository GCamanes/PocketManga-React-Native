import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, FlatList, View} from 'react-native';

import AppConstants from '../../app/app.constants';
import ChapterListItem from '../../components/chapter/ChapterListItem';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class ChaptersPage extends Component {
  render() {
    const {chapters, loadingStatus, manga} = this.props;
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
    return (
      <FlatList
        contentContainerStyle={{
          width: AppSizes.screen.width,
          alignItems: 'center',
          paddingVertical: 7,
        }}
        data={chapters}
        keyExtractor={item => item.id}
        numColumns={3}
        initialNumToRender={30}
        onEndReachedThreshold={30}
        renderItem={({item}) => (
          <ChapterListItem manga={manga} chapter={item} />
        )}
      />
    );
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

export default connect(
  mapStateToProps,
  null,
)(ChaptersPage);
