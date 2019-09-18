import Colors from './colors';
import Fonts from './fonts';
import {AppColors} from './index';

export default {
  mainView: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
  },
  // loading
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.primary,
  },
  // Navbar
  navbar: {
    backgroundColor: Colors.palette.black,
    borderBottomWidth: 0,
    height: 55,
  },
  navbarTitle: {
    color: Colors.palette.white,
    fontWeight: 'bold',
    fontFamily: Fonts.base.family,
    fontSize: Fonts.t18.size,
    marginLeft: -5,
  },
  navbarButton: {
    tintColor: '#ffffff',
  },
};
