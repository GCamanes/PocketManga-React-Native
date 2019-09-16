import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChapterListItem from './ChapterListItem';
import SectionTitle from '../manga/SectionTitle';
import assets from '../../assets';

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

  render() {
    const {data, manga, title} = this.props;
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
        {expanded &&
          data.map(item => (
            <ChapterListItem manga={manga} chapter={item} key={item.id} />
          ))}
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
