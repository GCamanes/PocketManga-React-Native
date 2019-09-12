/**
 * App Theme - Sizes
 */
import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
function getIconSize() {
  const ratio = PixelRatio.get();
  if (ratio < 2) {
    return 40;
  } else if (ratio === 2) {
    return 45;
  } else if (ratio > 2) {
    return 50;
  }
  return 60;
}
const iconSize = getIconSize();

export default {
  // Window Dimensions
  screen: {
    height: height,
    width: width,

    heightHalf: height * 0.5,
    heightThird: height * 0.333,

    widthHalf: width * 0.5,
    widthThird: width * 0.333,
    widthTwoThirds: width * 0.666,
    widthQuarter: width * 0.25,
    widthThreeQuarters: width * 0.75,
  },
  navbarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 16 : 0,

  padding: 20,
  paddingSml: 10,

  borderRadius: 2,

  cardIcon: iconSize,
};
