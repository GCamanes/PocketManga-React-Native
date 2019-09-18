import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppColors, AppFonts} from '../theme';

export class PageCount extends Component {
  render() {
    const {page} = this.props;
    if (!page) return null;
    return (
      <View
        style={{
          marginRight: 15,
          paddingHorizontal: 5,
          width: 80,
        }}>
        <Text
          style={{
            color: AppColors.palette.white,
            fontSize: AppFonts.t18.size,
            textAlign: 'right',
            fontWeight: 'bold',
          }}>
          {`${page.page}/${page.total}`}
        </Text>
      </View>
    );
  }
}

PageCount.propTypes = {
  page: PropTypes.object,
};

PageCount.defaultProps = {
  page: {page: 1, total: 1},
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  page: state.scan.page,
});

export default connect(
  mapStateToProps,
  null,
)(PageCount);
