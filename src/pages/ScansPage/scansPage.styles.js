import {Platform, StatusBar, StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes, AppStyles} from '../../theme';

const bottomHeight = 50;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
    alignItems: 'center',
  },
  swipeView: {
    backgroundColor: AppColors.palette.white,
    height:
      Platform.OS === 'android'
        ? AppSizes.screen.height - AppStyles.navbar.height - StatusBar.currentHeight - bottomHeight
        : AppSizes.screen.height - AppStyles.navbar.height - styles.bottomView.height - bottomHeight,
    width: AppSizes.screen.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flexDirection: 'row',
    height: bottomHeight,
    width: AppSizes.screen.width,
    backgroundColor: AppColors.palette.main.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: AppColors.palette.black,
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
    height: AppSizes.screen.width * 0.12,
    width: AppSizes.screen.width * 0.12,
    marginRight: 60,
  },
  centerView: {
    backgroundColor: AppColors.palette.white,
    height:
      Platform.OS === 'android'
        ? AppSizes.screen.height -
          AppStyles.navbar.height -
          StatusBar.currentHeight
        : AppSizes.screen.height - AppStyles.navbar.height,
    width: AppSizes.screen.width * 0.82,
    alignItems: 'center',
  },
  zoomText: {
    color: AppColors.palette.white,
    fontSize: AppFonts.t18.size,
    fontWeight: 'bold',
  },
});

export default styles;
