import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View} from 'react-native';
import ChapterListItem from './ChapterListItem';

class ChaptersContainer extends Component {
  render() {
    const {chapter_1, chapter_2, chapter_3, manga} = this.props;
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 4, marginVertical: 2}}>
        <View style={{flex: 1}}>
          {chapter_1 && <ChapterListItem manga={manga} chapter={chapter_1} />}
        </View>
        <View style={{flex: 1, marginHorizontal: 4}}>
          {chapter_2 && <ChapterListItem manga={manga} chapter={chapter_2} />}
        </View>
        <View style={{flex: 1}}>
          {chapter_3 && <ChapterListItem manga={manga} chapter={chapter_3} />}
        </View>
      </View>
    );
  }
}

ChaptersContainer.propTypes = {
  chapter_1: PropTypes.object.isRequired,
  chapter_2: PropTypes.object,
  chapter_3: PropTypes.object,
  manga: PropTypes.string.isRequired,
};

ChaptersContainer.defaultProps = {
  chapter_2: null,
  chapter_3: null,
};

export default ChaptersContainer;
