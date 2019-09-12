/**
 * App Theme - Fonts
 */
import { PixelRatio, Platform } from 'react-native';

function lineHeight(fontSize) {
  const multiplier = (fontSize > 20) ? 0.1 : 0.33;
  return parseInt(fontSize + (fontSize * multiplier), 10);
}

function getSizeByRatio(ratio) {
  if (ratio === 1) return 12;
  if (ratio > 1 && ratio < 2) return 14;
  if (ratio === 2) return 13;
  if (ratio > 2) return 16;
}

console.log('PixelRatio : ', PixelRatio.get());

const base = {
  size: getSizeByRatio(PixelRatio.get()),
  lineHeight: lineHeight(14),
  ...Platform.select({
    ios: {
      family: 'Arial',
    },
    android: {
      family: 'Arial',
    },
  }),
};

export default {
  base: { ...base },
  h1: { ...base, size: base.size * 1.75, lineHeight: lineHeight(base.size * 2) },
  h2: { ...base, size: base.size * 1.5, lineHeight: lineHeight(base.size * 1.75) },
  h3: { ...base, size: base.size * 1.2, lineHeight: lineHeight(base.size * 1.5) },
  h4: { ...base, size: base.size * 1.1, lineHeight: lineHeight(base.size * 1.25) },
  h5: { ...base },
  t10: { ...base, size: base.size * 0.7, lineHeight: lineHeight(base.size * 0.8) },
  t12: { ...base, size: base.size * 0.8, lineHeight: lineHeight(base.size * 0.9) },
  t13: { ...base, size: base.size * 0.9, lineHeight: lineHeight(base.size * 1.0) },
  t14: { ...base, size: base.size, lineHeight: lineHeight(base.size * 1.1) },
  t16: { ...base, size: base.size * 1.15, lineHeight: lineHeight(base.size * 1.2) },
  t18: { ...base, size: base.size * 1.25, lineHeight: lineHeight(base.size * 1.3) },
  t20: { ...base, size: base.size * 1.45, lineHeight: lineHeight(base.size * 1.5) },
  t22: { ...base, size: base.size * 1.6, lineHeight: lineHeight(base.size * 1.65) },
  t24: { ...base, size: base.size * 1.7, lineHeight: lineHeight(base.size * 1.8) },
  t30: { ...base, size: base.size * 2.15, lineHeight: lineHeight(base.size * 2.2) },
};
