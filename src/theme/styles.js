import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

export default {
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
