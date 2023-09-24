const colors = {
  gray: { 200: '#E4E6E8', 600: '#888C90', 800: '#54585C' },
  blue: { 50: '#E3F2FD', 600: '#1E88E5' },
  secondary: '#888C90',
  black: '#000000',
}

const theme = {
  colors,
  text: {
    primary: colors.black,
    secondary: colors.gray[600],
  },
  typography: {
    fontWeight: 400,
    headline1: {
      fontSize: '72px',
      letterSpacing: -0.8,
      lineHeight: '80px',
    },
    headline2: {
      fontFamily: 'Signika-Regular',
      fontSize: '60px',
      letterSpacing: -0.4,
      lineHeight: '68px',
    },
    headline3: {
      fontFamily: 'Signika-Regular',
      fontSize: '48px',
      letterSpacing: -0.4,
      lineHeight: '56px',
    },
    headline4: {
      fontFamily: 'Signika-Regular',
      fontSize: '36px',
      letterSpacing: -0.8,
      lineHeight: '44px',
    },
    headline5: {
      fontFamily: 'Signika-Regular',
      fontSize: '24px',
      letterSpacing: -0.2,
      lineHeight: '28px',
    },
    headline6: {
      fontFamily: 'Signika-Regular',
      fontSize: '20px',
      letterSpacing: -0.8,
      lineHeight: '24px',
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontSize: '24px',
      lineHeight: '32px',
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontSize: '20px',
      lineHeight: '24px',
    },
    bodyL: { fontFamily: 'Roboto', fontSize: '18px', lineHeight: '28px' },
    bodyM: { fontFamily: 'Roboto', fontSize: '16px', lineHeight: '24px' },
    bodyS: { fontFamily: 'Roboto', fontSize: '14px', lineHeight: '20px' },
    disclaimer: {
      fontFamily: 'Roboto',
      fontSize: '12px',
      lineHeight: '16px',
      color: colors.gray[600],
    },
  },
}

export default theme
