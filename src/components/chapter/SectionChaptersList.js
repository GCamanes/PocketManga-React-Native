import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrayFunctions from '../../utils/arrays';
import ChapterListItem from './ChapterListItem';
import SectionTitle from '../SectionTitle';
import assets from '../../assets';
import ChaptersContainer from './ChaptersContainer';
import {AppColors, AppFonts} from '../../theme';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 20,
    backgroundColor: AppColors.palette.grey,
    borderWidth: 3,
    margin: 4,
  },
  image: {
    height: 40,
    width: 40,
  },
  titleView: {
    flex: 1,
  },
  title: {
    fontSize: AppFonts.t20.size,
    color: AppColors.palette.main.tertiary,
    fontWeight: 'bold',
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
        <TouchableOpacity onPress={this.toggleExpand} style={styles.view}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Image
            source={expanded ? assets.upChevron : assets.downChevron}
            style={{...styles.image, marginLeft: 35}}
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
