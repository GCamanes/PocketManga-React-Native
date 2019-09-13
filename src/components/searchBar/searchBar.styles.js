import { StyleSheet } from 'react-native';
import { AppColors, AppSizes } from '../../theme';

const styles = StyleSheet.create({
  searchBarView: {
    height: AppSizes.screen.width * 0.15,
    backgroundColor: AppColors.palette.main.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: AppSizes.screen.width * 0.97,
    height: AppSizes.screen.width * 0.12,
    borderRadius: 10,
    backgroundColor: AppColors.palette.main.primary,
    borderColor: AppColors.palette.main.quaternary,
    borderWidth: 2,
  },
  searchTextInput: {
    height: AppSizes.screen.width * 0.12,
    width: AppSizes.screen.width * 0.8,
    paddingStart: 10,
    fontSize: 20,
    color: AppColors.palette.main.tertiary,
  },
  image: {
    height: AppSizes.screen.width * 0.07,
    width: AppSizes.screen.width * 0.07,
  },
});

export default styles;
