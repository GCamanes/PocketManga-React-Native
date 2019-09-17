import {Platform, StatusBar, StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes, AppStyles} from '../../theme';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSideView: {
    width: AppSizes.screen.width * 0.09,
    backgroundColor: AppColors.palette.main.tertiary,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
  },
  leftSideTouchableView: {
    height: AppSizes.screen.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSideView: {
    width: AppSizes.screen.width * 0.09,
    backgroundColor: AppColors.palette.main.tertiary,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
  },
  rightSideTouchableView: {
    height: AppSizes.screen.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: AppSizes.screen.width * 0.1,
    width: AppSizes.screen.width * 0.1,
  },
  centerView: {
    backgroundColor: AppColors.palette.grey,
    height:
      Platform.OS === 'android'
        ? AppSizes.screen.height -
          AppStyles.navbar.height -
          StatusBar.currentHeight
        : AppSizes.screen.height - AppStyles.navbar.height,
    width: AppSizes.screen.width * 0.82,
    alignItems: 'center',
  },
});

export default styles;
