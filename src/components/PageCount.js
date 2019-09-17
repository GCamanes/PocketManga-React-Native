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
          marginRight: 10,
          backgroundColor: AppColors.palette.white,
          borderColor: AppColors.palette.main.tertiary,
          borderWidth: 2,
          paddingHorizontal: 5,
          width: 100,
        }}>
        <Text
          style={{
            color: AppColors.palette.black,
            fontSize: AppFonts.t16.size,
            textAlign: 'center',
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
