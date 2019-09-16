import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideView: {
    height: AppSizes.screen.width * 0.13,
    width: AppSizes.screen.width * 0.13,
    backgroundColor: AppColors.palette.main.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSideView: {
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
  },
  rightSideView: {
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
  },
  image: {
    height: AppSizes.screen.width * 0.11,
    width: AppSizes.screen.width * 0.11,
  },
  bottomView: {
    height: '100%',
    width: AppSizes.screen.width * 0.74,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
