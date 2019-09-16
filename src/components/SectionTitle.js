import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors, AppSizes} from '../theme';

const styles = StyleSheet.create({
  sectionTitleView: {
    height: AppSizes.screen.width * 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.palette.blueOpacity,
  },
  sectionTitleText: {
    width: AppSizes.screen.width * 0.4,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    marginStart: 5,
    marginEnd: 5,
    color: AppColors.palette.main.tertiary,
  },
  barView: {
    height: 2,
    width: AppSizes.screen.width * 0.15,
    borderRadius: 20,
    backgroundColor: AppColors.palette.main.secondary,
  },
});

class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, imageLeft, imageRight} = this.props;
    return (
      <View style={styles.sectionTitleView}>
        {imageLeft ? imageLeft : <View style={styles.barView} />}
        <Text style={styles.sectionTitleText}>{title}</Text>
        {imageRight ? imageRight : <View style={styles.barView} />}
      </View>
    );
  }
}

SectionTitle.propTypes = {
  imageLeft: PropTypes.any,
  imageRight: PropTypes.any,
  title: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  imageLeft: null,
  imageRight: null,
};

export default SectionTitle;
