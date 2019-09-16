import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppConstants from '../../app/app.constants';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {AppColors, AppStyles} from '../../theme';
import SectionChaptersList from '../../components/chapter/SectionChaptersList';

class ChaptersPage extends Component {
  getNumberOfSections(number) {
    let numberOfSections = Math.round(
      number / AppConstants.GENERAL.CHAPTERS_PER_SECTION,
    );
    if (numberOfSections < number / AppConstants.GENERAL.CHAPTERS_PER_SECTION) {
      numberOfSections += 1;
    }
    return numberOfSections;
  }

  renderChaptersSections = () => {
    const {chapters, manga} = this.props;
    const numberOfSections = this.getNumberOfSections(chapters[0].number);
    const sections = [];
    for (let i = numberOfSections - 1; i >= 0; i--) {
      let title = `${i * AppConstants.GENERAL.CHAPTERS_PER_SECTION} to ${(i + 1) * AppConstants.GENERAL.CHAPTERS_PER_SECTION - 1}`;
      let expanded = false;
      if (i === numberOfSections - 1) {
        title = `${i * AppConstants.GENERAL.CHAPTERS_PER_SECTION} to ${
          chapters[0].number
        }`;
        expanded = true;
      }
      sections.push({
        title: title,
        data: chapters.filter(
          item =>
            item.number >= i * AppConstants.GENERAL.CHAPTERS_PER_SECTION &&
            item.number < (i + 1) * AppConstants.GENERAL.CHAPTERS_PER_SECTION,
        ),
        expanded,
      });
    }
    return sections.map(item => (
      <SectionChaptersList
        data={item.data}
        key={item.title}
        manga={manga}
        title={item.title}
        expanded={item.expanded}
      />
    ));
  };

  isChapterAtTop = (index, numColumns) => {
    return index < numColumns;
  }

  isChapterAtBottom = (index, numColumns, dataLength) => {
    const diffColumns = dataLength % numColumns;
    return index >= dataLength - (diffColumns !== 0 ? diffColumns : numColumns);
  }

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
    return <ScrollView style={AppStyles.mainView}>{this.renderChaptersSections()}</ScrollView>;
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
