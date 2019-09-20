import {AppColors, AppStyles} from '../theme';

const AppConfig = {
  sceneProps: {
    hideNavBar: false,
    titleStyle: AppStyles.navbarTitle,
    navigationBarStyle: AppStyles.navbar,
    navBarButtonColor: AppStyles.navbarButton.tintColor,
    leftButtonIconStyle: AppStyles.navbarButton,
    rightButtonIconStyle: AppStyles.navbarButton,
    sceneStyle: {
      backgroundColor: AppColors.palette.white,
    },
  },
};

export default AppConfig;
