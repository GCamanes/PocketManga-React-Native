import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import AppConstants from '../../app/app.constants';
import assets from '../../assets';
import showAlert from '../../utils/showAlert';
import styles from './scansPage.styles';
import * as ChapterActions from '../../redux/actions/chapter-actions';
import * as ScanActions from '../../redux/actions/scan-actions';
import {AppColors, AppStyles} from '../../theme';

class ScansPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
      zoom: false,
    };
  }

  onPressMarkAsRead = () => {
    const {chapter, markChapterAsRead} = this.props;
    console.log(chapter);
    markChapterAsRead(chapter.id, true, true);
  }

  onSwipeLeft = () => {
    const {connectivity, getScanInfos, scans} = this.props;
    const {currentPageIndex} = this.state;
    if (currentPageIndex != scans.length - 1) {
      if (connectivity) {
        this.setState({
          currentPageIndex: currentPageIndex + 1,
        });
        getScanInfos(
          scans[currentPageIndex + 1].url,
          currentPageIndex + 1,
          scans.length,
        );
      } else {
        showAlert('No internet connection');
      }
    }
  }

  onSwipeRight = () => {
    const {connectivity, getScanInfos, scans} = this.props;
    const {currentPageIndex} = this.state;
    if (currentPageIndex != 0) {
      if (connectivity) {
        this.setState({
          currentPageIndex: currentPageIndex - 1,
        });
        getScanInfos(
          scans[currentPageIndex - 1].url,
          currentPageIndex - 1,
          scans.length,
        );
      } else {
        showAlert('No internet connection');
      }
    }
  }

  onToggleSwitchZoom = value => {
    const {loadingScanInfoStatus, updateZoom, zoom} = this.props;
    if (!loadingScanInfoStatus.loading) {
      updateZoom(!zoom);
    }
  };

  render() {
    const {
      loadingStatus,
      loadingScanInfoStatus,
      scanInfos,
      scans,
      zoom,
    } = this.props;
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
    const scanViewSize = {
      height: styles.scanView.height,
      width: styles.scanView.width,
      imgRatioHW: styles.scanView.height / styles.scanView.width,
      imgRatioWH: styles.scanView.width / styles.scanView.height,
    };
    if (scanInfos) {
      if (scanInfos.imgRatioHW > 1) {
        if (scanInfos.imgRatioHW < scanViewSize.imgRatioHW) {
          imgSize.height = scanViewSize.width * 0.95 * scanInfos.imgRatioHW;
          imgSize.width = scanViewSize.width * 0.95;
        } else {
          imgSize.height = scanViewSize.height * 0.95;
          imgSize.width = scanViewSize.height * 0.95 * scanInfos.imgRatioWH;
        }
      } else {
        imgSize.height = scanViewSize.width * 0.95 * scanInfos.imgRatioHW;
        imgSize.width = scanViewSize.width * 0.95;
      }
    }

    return (
      <View style={styles.mainView}>
        {!zoom && (
          <GestureRecognizer
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            config={swipeConfig}
            style={styles.scanView}
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
        )}
        {zoom && !loadingScanInfoStatus.loading && (
          <ReactNativeZoomableView
            maxZoom={2.0}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            style={styles.scanView}
          >
            <Image
              source={{uri: scans[currentPageIndex].url}}
              style={{
                width: imgSize.width,
                height: imgSize.height,
              }}
            />
          </ReactNativeZoomableView>
        )}
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={this.onPressMarkAsRead}>
            <Image source={assets.asRead} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.zoomText}>SWIPE</Text>
          <Switch
            onValueChange={this.onToggleSwitchZoom}
            value={zoom}
            trackColor={{
              true: AppColors.palette.main.primary,
              false: AppColors.palette.main.primary,
            }}
            thumbColor={AppColors.palette.black}
          />
          <Text style={styles.zoomText}>ZOOM</Text>
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
  updateZoom: PropTypes.func.isRequired,
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
  zoom: state.scan.zoom,
});

export default connect(
  mapStateToProps,
  {...ChapterActions, ...ScanActions},
)(ScansPage);
