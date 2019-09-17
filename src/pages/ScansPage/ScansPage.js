import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import assets from '../../assets';
import styles from './scansPage.styles';
import * as ChapterActions from '../../redux/actions/chapter-actions';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class ScansPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
    };
  }

  onPressNextPage = () => {
    const {scans} = this.props;
    const {currentPageIndex} = this.state;
    if (currentPageIndex != scans.length - 1) {
      this.setState({
        currentPageIndex: currentPageIndex + 1,
      });
      // this.props.loadImageRatio(this.props.pages[this.state.currentPageIndex + 1].url);
    }
  }

  onPressPreviousPage = () => {
    const {scans} = this.props;
    const {currentPageIndex} = this.state;
    if (currentPageIndex != 0) {
      this.setState({
        currentPageIndex: currentPageIndex - 1,
      });
      // this.props.loadImageRatio(this.props.pages[this.state.currentPageIndex - 1].url);
    }
  }

  onPressMarkAsRead = () => {
    const {chapter, markChapterAsRead} = this.props;
    console.log(chapter);
    markChapterAsRead(chapter.id, true, true);
  }

  render() {
    const {loadingStatus, scans} = this.props;
    const {currentPageIndex} = this.state;
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
      <View style={styles.mainView}>
        <View style={styles.leftSideView}>
          {currentPageIndex !== 0 && (
            <TouchableOpacity style={styles.leftSideTouchableView} onPress={this.onPressPreviousPage}>
              <Image source={assets.leftChevron} style={styles.image} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.centerView}>
          <Image
            source={{uri: scans[currentPageIndex].url}}
            style={{height: 100, width: 100}}
          />
        </View>
        <View style={styles.rightSideView}>
          <TouchableOpacity
            style={styles.rightSideTouchableView}
            onPress={
              currentPageIndex !== scans.length - 1
                ? this.onPressNextPage
                : this.onPressMarkAsRead
            }>
            <Image
              source={
                currentPageIndex !== scans.length - 1
                  ? assets.rightChevron
                  : assets.asRead
              }
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ScansPage.propTypes = {
  chapter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
  }),
  connectivity: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.object,
  markChapterAsRead: PropTypes.func.isRequired,
  scans: PropTypes.arrayOf(PropTypes.object),
};

ScansPage.defaultProps = {
  loadingStatus: {loading: false},
  scans: [],
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.SCANS],
  scans: state.scan.scans,
});

export default connect(
  mapStateToProps,
  ChapterActions,
)(ScansPage);
