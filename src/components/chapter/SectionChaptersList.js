import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrayFunctions from '../../utils/arrays';
import ChapterListItem from './ChapterListItem';
import SectionTitle from '../SectionTitle';
import assets from '../../assets';
import ChaptersContainer from './ChaptersContainer';

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
});

class SectionChaptersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
    };
  }

  toggleExpand = () => {
    const {expanded} = this.state;
    this.setState({expanded: !expanded});
  };

  renderChaptersitem = () => {
    const {data, manga} = this.props;
    const chunckedData = ArrayFunctions.getChunckedArray(3, data);
    return chunckedData.map(item => (
      <ChaptersContainer
        chapter_1={item[0]}
        chapter_2={item.length >= 2 ? item[1] : null}
        chapter_3={item.length >= 3 ? item[2] : null}
        key={item[0].id}
        manga={manga}
      />
    ));
  };

  render() {
    const {title} = this.props;
    const {expanded} = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this.toggleExpand}>
          <SectionTitle
            title={title}
            imageLeft={
              <Image
                source={expanded ? assets.downArrow : assets.rightArrow}
                style={{...styles.image, marginRight: 35}}
              />
            }
            imageRight={
              <Image
                source={expanded ? assets.downArrow : assets.leftArrow}
                style={{...styles.image, marginLeft: 35}}
              />
            }
          />
        </TouchableOpacity>
        {expanded && <View>{this.renderChaptersitem()}</View>}
      </View>
    );
  }
}

SectionChaptersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  expanded: PropTypes.bool,
  manga: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SectionChaptersList.defaultProps = {
  expanded: false,
};

export default SectionChaptersList;
