import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AppColors, AppFonts} from '../theme';

const VersionContainer = () => (
  <View
    style={{
      marginRight: 15,
      paddingHorizontal: 5,
      width: 80,
    }}>
    <Text
      style={{
        color: AppColors.palette.white,
        fontSize: AppFonts.t12.size,
        textAlign: 'right',
      }}>
      v1.1.0
    </Text>
  </View>
);

export default VersionContainer;
