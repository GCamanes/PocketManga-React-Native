import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  sectionTitleView: {
    height: AppSizes.screen.width * 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.primary,
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

class MangaSectionTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title} = this.props;
    return (
      <View style={styles.sectionTitleView}>
        <View style={styles.barView} />
        <Text style={styles.sectionTitleText}>{title}</Text>
        <View style={styles.barView} />
      </View>
    )
  }
};

export default MangaSectionTitle;
