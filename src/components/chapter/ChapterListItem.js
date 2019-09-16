import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppColors, AppSizes} from '../../theme';


const styles = StyleSheet.create({
  chapterItemView: {
    backgroundColor: AppColors.palette.main.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: AppSizes.screen.width * 0.15,
    borderWidth: 3,
    borderColor: AppColors.palette.main.tertiary,
  },
  chapterItemText: {
    fontSize: 18,
  },
});

export class ChapterListItem extends React.Component {
  onPressItem = () => {
    if (this.props.connectivity) {} else {
      Alert.alert('Warning', 'No internet connection.');
    }
  }

  onLongPressItem = () => {
    const {id, isChapterRead} = this.props.chapter;
    //this.props.markChapterAsRead(id, !isChapterRead);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPressItem} onLongPress={this.onLongPressItem} delayLongPress={500}>
        <View
          style={{
            ...styles.chapterItemView,
            backgroundColor: this.props.chapter.isChapterRead
              ? AppColors.palette.main.quaternary
              : AppColors.palette.main.primary,
          }}>
          <Text
            style={{
              ...styles.chapterItemText,
              color: this.props.chapter.isChapterRead
                ? AppColors.palette.main.primary
                : AppColors.palette.main.tertiary,
            }}>
            {this.props.chapter.number}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ChapterListItem.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  manga: PropTypes.string.isRequired,
  chapter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    isChapterRead: PropTypes.bool.isRequired,
  }),
};
const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
});

export default connect(
  mapStateToProps,
  null,
)(ChapterListItem);
