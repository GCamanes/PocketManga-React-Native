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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import AppConstants from '../../app/app.constants';
import assets from '../../assets';
import styles from './scansPage.styles';
import * as ChapterActions from '../../redux/actions/chapter-actions';
import * as ScanActions from '../../redux/actions/scan-actions';
import {AppColors, AppStyles} from '../../theme';

class ScansPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
    };
  }

  onPressMarkAsRead = () => {
    const {chapter, markChapterAsRead} = this.props;
    console.log(chapter);
    markChapterAsRead(chapter.id, true, true);
  }

  onSwipeLeft = () => {
    const {getScanInfos, scans} = this.props;
    const {currentPageIndex} = this.state;
    if (currentPageIndex != scans.length - 1) {
      this.setState({
        currentPageIndex: currentPageIndex + 1,
      });
      getScanInfos(
        scans[currentPageIndex + 1].url,
        currentPageIndex + 1,
        scans.length,
      );
    }
  }

  onSwipeRight = () => {
    const {getScanInfos, scans} = this.props;
    const {currentPageIndex} = this.state;
    if (currentPageIndex != 0) {
      this.setState({
        currentPageIndex: currentPageIndex - 1,
      });
      getScanInfos(
        scans[currentPageIndex - 1].url,
        currentPageIndex - 1,
        scans.length,
      );
    }
  }

  render() {
    const {loadingStatus, loadingScanInfoStatus, scanInfos, scans} = this.props;
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
    const swipeConfig = {
      velocityThreshold: 0,
      directionalOffsetThreshold: 150,
    };

    const imgSize = {height: 0, width: 0};
    const swipeViewSize = {
      height: styles.swipeView.height,
      width: styles.swipeView.width,
      imgRatioHW: styles.swipeView.height / styles.swipeView.width,
      imgRatioWH: styles.swipeView.width / styles.swipeView.height,
    };
    if (scanInfos) {
      if (scanInfos.imgRatioHW > 1) {
        if (scanInfos.imgRatioHW < swipeViewSize.imgRatioHW) {
          imgSize.height = swipeViewSize.width * 0.95 * scanInfos.imgRatioHW;
          imgSize.width = swipeViewSize.width * 0.95;
        } else {
          imgSize.height = swipeViewSize.height * 0.95;
          imgSize.width = swipeViewSize.height * 0.95 * scanInfos.imgRatioWH;
        }
      } else {
        imgSize.height = swipeViewSize.width * 0.95 * scanInfos.imgRatioHW;
        imgSize.width = swipeViewSize.width * 0.95;
      }
    }

    return (
      <View style={styles.mainView}>
        <GestureRecognizer
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          config={swipeConfig}
          style={styles.swipeView}
        >
          {loadingScanInfoStatus.loading && (
            <View style={AppStyles.loadingView}>
              <ActivityIndicator
                size="large"
                color={AppColors.palette.main.secondary}
              />
            </View>
          )}
          {!loadingScanInfoStatus.loading && (
            <Image
              source={{uri: scans[currentPageIndex].url}}
              style={{
                width: imgSize.width,
                height: imgSize.height,
              }}
            />
          )}
        </GestureRecognizer>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={this.onPressMarkAsRead}>
            <Image source={assets.asRead} style={styles.image} />
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
  getScanInfos: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  loadingScanInfoStatus: PropTypes.object,
  markChapterAsRead: PropTypes.func.isRequired,
  scanInfos: PropTypes.object,
  scans: PropTypes.arrayOf(PropTypes.object),
};

ScansPage.defaultProps = {
  loadingStatus: {loading: false},
  loadingScanInfoStatus: {loading: false},
  scanInfos: null,
  scans: [],
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.SCANS],
  loadingScanInfoStatus: state.app[AppConstants.ROUTES.SCAN_INFOS],
  scanInfos: state.scan.scanInfos,
  scans: state.scan.scans,
});

export default connect(
  mapStateToProps,
  {...ChapterActions, ...ScanActions},
)(ScansPage);
