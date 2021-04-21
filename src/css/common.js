import {StyleSheet} from 'react-native';

export const common = StyleSheet.create({
  p0: {padding: 0},
  p5: {padding: 5},
  p10: {padding: 10},
  p15: {padding: 15},
  p20: {padding: 20},

  pt0: {paddingTop: 0},
  pt5: {paddingTop: 5},
  pt10: {paddingTop: 10},
  pt15: {paddingTop: 15},
  pt20: {paddingTop: 20},

  pb0: {paddingBottom: 0},
  pb5: {paddingBottom: 5},
  pb10: {paddingBottom: 10},
  pb15: {paddingBottom: 15},
  pb20: {paddingBottom: 20},

  pl0: {paddingLeft: 0},
  pl5: {paddingLeft: 5},
  pl10: {paddingLeft: 10},
  pl15: {paddingLeft: 15},
  pl20: {paddingLeft: 20},

  pr0: {paddingRight: 0},
  pr5: {paddingRight: 5},
  pr10: {paddingRight: 10},
  pr15: {paddingRight: 15},
  pr20: {paddingRight: 20},

  // -----------

  m0: {margin: 0},
  m5: {margin: 5},
  m10: {margin: 10},
  m15: {margin: 15},
  m20: {margin: 20},

  mt0: {marginTop: 0},
  mt5: {marginTop: 5},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},

  mb0: {marginBottom: 0},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb15: {marginBottom: 15},
  mb20: {marginBottom: 20},

  ml0: {marginLeft: 0},
  ml5: {marginLeft: 5},
  ml10: {marginLeft: 10},
  ml15: {marginLeft: 15},
  ml20: {marginLeft: 20},

  mr0: {marginRight: 0},
  mr5: {marginRight: 5},
  mr10: {marginRight: 10},
  mr15: {marginRight: 15},
  mr20: {marginRight: 20},

  // --------FONTS------------------
  textbold: {
    fontWeight: '800',
  },
  boldmedium: {
    fontWeight: '600',
  },
  textlarg: {
    fontSize: 20,
  },
  textXlarg: {
    fontSize: 22,
  },
  textXXlarg: {
    fontSize: 26,
  },
  textmedium: {
    fontSize: 16,
  },
  textsmall: {
    fontSize: 14,
  },
  font10: {
    fontSize: 10,
  },
  font12: {
    fontSize: 12,
  },
  font18: {
    fontSize: 18,
  },

  // ----------------------

  bordernone: {
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  // -------------------------

  center: {
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  right: {
    textAlign: 'right',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },

  w100: {
    width: '100%',
    height: '100%',
  },

  //   -----------------COLORS------------------------

  bgwhite: {
    backgroundColor: '#fff',
  },
  secondarycolor: {
    color: '#342525',
  },

  black: {
    color: '#000',
  },
  bgprimary: {
    backgroundColor: '#F8FAFB',
  },

  themcolor: {
    backgroundColor: '#fe0006',
    color: '#fe0006',
  },
  textcenter: {
    textAlign: 'center',
  },
  arrowgrey: {
    color: '#E0DFEC',
  },

  flexstyle: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  flexone: {
    flex: 1,
  },
  alincenter: {
    alignItems: 'center',
  },
  textlover: {
    textTransform: 'capitalize',
  },
  blue: {
    color: '#0340B9',
  },
  textright: {
    textAlign: 'right',
  },
  danger: {
    color: '#F12E2E',
  },

  //   -----------------COLORS------------------------

  white: {
    color: '#fff',
  },
  textgray: {
    color: '#878787',
  },
  graytext: {
    color: '#959595',
  },
  textcolor: {
    color: '#484848',
  },
  black: {
    color: '#000',
  },
  textcenter: {
    textAlign: 'center',
  },
  shadowdf: {
    borderRadius: 7,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.21,

    elevation: 1.2,
  },

  bgblack: {
    backgroundColor: '#000000',
  },

  bold200: {
    fontWeight: '200',
  },
  bold400: {
    fontWeight: '400',
  },
  bold600: {
    fontWeight: '600',
  },
  bold800: {
    fontWeight: '800',
  },

  //------------FONT-FACE------------

  fontmedium: {
    fontFamily: 'Volte_Medium',
    textTransform: 'none',
  },
  fontsemibold: {
    fontFamily: 'Volte_Semibold',
    textTransform: 'none',
  },
  justfycenter: {
    alignItems: 'center',
  },
});
