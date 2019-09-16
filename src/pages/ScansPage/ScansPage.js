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
import styles from './scansPage.styles';
import {AppColors, AppSizes, AppStyles} from '../../theme';
import assets from '../../assets';

class ScansPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus} = this.props;
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
      <View style={styles.modalView}>
        <TouchableOpacity style={[styles.sideView, styles.leftSideView]}>
          <Image source={assets.leftChevron} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <View style={{height: 40, width: 100}}>
            <Text>bottom</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.sideView, styles.rightSideView]}>
          <Image source={assets.rightChevron} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

ScansPage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.object,
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
  null,
)(ScansPage);
