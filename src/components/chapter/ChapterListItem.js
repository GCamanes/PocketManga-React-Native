import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppColors, AppSizes} from '../../theme';
import * as ChapterActions from '../../redux/actions/chapter-actions';
import * as ScanActions from '../../redux/actions/scan-actions';
import showAlert from '../../utils/showAlert';

const styles = StyleSheet.create({
  chapterItemView: {
    backgroundColor: AppColors.palette.main.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: AppSizes.screen.width * 0.31,
    height: AppSizes.screen.width * 0.15,
    margin: 2,
    borderWidth: 3,
    borderColor: AppColors.palette.main.tertiary,
  },
  chapterItemText: {
    fontSize: 18,
  },
});

export class ChapterListItem extends React.Component {
  onPressItem = () => {
    const {chapter, getScans, manga} = this.props;
    if (this.props.connectivity) {
      getScans(manga, chapter);
    } else {
      showAlert('No internet connection');
    }
  }

  onLongPressItem = () => {
    const {chapter, markChapterAsRead} = this.props;
    markChapterAsRead(chapter.id, !chapter.isRead);
  }

  render() {
    const {chapter} = this.props;
    console.log(chapter);
    return (
      <TouchableOpacity onPress={this.onPressItem} onLongPress={this.onLongPressItem} delayLongPress={1000}>
        <View
          style={{
            ...styles.chapterItemView,
            backgroundColor: chapter.isRead
              ? AppColors.palette.main.quaternary
              : AppColors.palette.main.primary,
          }}>
          <Text
            style={{
              ...styles.chapterItemText,
              color: chapter.isRead
                ? AppColors.palette.main.primary
                : AppColors.palette.main.tertiary,
            }}>
            {chapter.number}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ChapterListItem.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  getScans: PropTypes.func.isRequired,
  manga: PropTypes.string.isRequired,
  chapter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
  }),
  markChapterAsRead: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
});

export default connect(
  mapStateToProps,
  {...ChapterActions, ...ScanActions},
)(ChapterListItem);
