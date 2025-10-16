import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#E2651D',
  buttomColor: '#F44300',
  secondary: '#5A3E2B',
  jobColor: '#5097A4',
  subscriptionColor: '#575082',
  newLaunch: '#2F3C4F',
  marketColor: '#1064d5',
  coffeeColor: 'rgb(255, 219, 185)',
  adminPrimary: '#FFAC12',
  adminSecondary: '#F89500',
  gray: '#C2C2C2', // gray
  third: '#535252', // gray
  inputTextColor: '#999999',
  inputBg: '#EFFBFF',
  textGray: '#505050',
  // colors
  black: '#000',
  black2: '#303030',
  white: '#fff',
  red: '#D9241C',
  blue: '#0000FF',
  RoyalBlue: '#2e64e5',
  MoodyBlue: '#7474d2',
  newGray: '#F5F5F5',
  lightGray: '#F5F5F6',
  lightGray2: '#DCDCDC',
  transparent: 'transparent',
  darkgray: '#898C95',
  opacity: '#f2f2f2',
  newColor: '#F4F5F7',
  lawngreen: '#00FF00',
  success: '#47b913',
  green: '#47b913',
  lightPrimary: '#fbcba6',
  divider: '#CFCFCF',
  textColor: '#7B3F00',
  cardColor: '#FCEBD7',
  backgroundColor: '#rgba(255, 236, 204, 1)',
  backgroundColor2: '#FFFAF4',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  rupeeSymbol: '₹',
  h2: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  PoppinsBold: 'Poppins-Bold',
  PoppinsBoldItalic: 'Poppins-BoldItalic',
  PoppinsSemiBold: 'Poppins-SemiBold',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsBlack: 'Poppins-Black',
  PoppinsBlackItalick: 'Poppins-BlackItalic',
  PoppinsItalic: 'Poppins-Italic',
  PoppinsLight: 'Poppins-Light',
  PoppinsLightItalic: 'Poppins-LightItalic',
  PoppinsExtrabold: 'Poppins-ExtraBold',
  PoppinsExtraboldItalic: 'Poppins-ExtraBoldItalic',
  PoppinsExtraLight: 'Poppins-ExtraLight',
  PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
  PoppinsMediumItalic: 'Poppins-MediumItalic',
  PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
  PoppinsThin: 'Poppins-Thin',
  PoppinsThinItalic: 'Poppins-ThinItalic',

  DancingScriptRegular: 'DancingScript-Regular',
  DancingScriptBold: 'DancingScript-Bold',
  DancingScriptMedium: 'DancingScript-Medium',
  DancingScriptSemiBold: 'DancingScript-SemiBold',
};

// export const REMOVESTRING = (value) => {
//   return `${FONTS.rupeeSymbol}${value.toFixed(2)}`;
// };

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
