import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';
import {AppColors} from './index';

export default {
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
    fontSize: Fonts.t24.size,
  },
  navbarButton: {
    tintColor: '#ffffff',
  },
};
