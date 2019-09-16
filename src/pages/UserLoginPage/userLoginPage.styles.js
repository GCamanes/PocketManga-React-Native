import {
  StyleSheet,
} from 'react-native';
import { AppColors, AppFonts, AppSizes } from '../../theme';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  loginView: {
    width: AppSizes.screen.widthHalf,
    height: AppSizes.screen.widthQuarter / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.palette.main.tertiary,
    borderRadius: 50,
    borderColor: AppColors.palette.main.secondary,
    borderWidth: 2,
  },
  input: {
    width: AppSizes.screen.width * 0.8,
    height: 40,
    marginVertical: 5,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: AppColors.palette.main.tertiary,
    backgroundColor: AppColors.palette.main.primary,
    borderColor: AppColors.palette.main.secondary,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: AppFonts.t16.size,
    textAlignVertical: 'center',
  },
  rememberUserView: {
    width: AppSizes.screen.widthThreeQuarters,
    height: 40,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberUserText: {
    fontSize: 16,
    color: AppColors.palette.main.primary,
    marginEnd: 10,
    fontWeight: 'bold',
  },
  touchableLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: AppColors.palette.main.primary,
    fontSize: AppFonts.t24.size,
    fontWeight: 'bold',
  },
});

export default styles;
