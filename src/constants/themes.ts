const lightThemeColors = {
  accent: '#a18a68',
  main: '#ffffff',
  secondary: '#000000',
  darkGrey: '#707070',
  grey: '#d8d8d8',
  lightGrey: '#efefef',
  error: '#d82700',
};

const darkThemeColors = {
  accent: '#a18a68',
  secondary: '#ffffff',
  main: '#000000',
  lightGrey: '#707070',
  grey: '#d8d8d8',
  darkGrey: '#efefef',
  error: '#d82700',
};

const typography = {
  h1: {
    fontWeight: 500,
    fontSize: '33px',
  },
  h2: {
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '35px',
  },
  h3: {
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '26px',
  },
  h4: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px',
  },
  h5: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '27px',
  },
  l: {
    fontWeight: 700,
    fontSize: '16px',
  },
  m: {
    fontWeight: 400,
    fontSize: '14px',
  },
  s: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
  },
};

const baseTheme = {
  colors: {
    ...lightThemeColors,
  },

  typography: {
    ...typography,
  },

  gaps: {
    xxxl: '64px',
    xxl: '40px',
    xl: '24px',
    l: '16px',
    m: '12px',
    s: '8px',
    xs: '4px',
  },

  paddings: {
    l: '40px',
    m: '16px',
    s: '8px',
    xs: '6px',
  },

  margins: {
    center: '0 auto',
    xxxl: '128px',
    xxl: '122px',
    xl: '96px',
    l: '64px',
    m: '40px',
    s: '16px',
    xs: '6px',
  },

  buttons: {
    l: {
      width: '500px',
      height: '53px',
    },
    m: {
      width: '288px',
      height: '53px',
    },
    s: {
      width: '187px',
      height: '53px',
    },
  },

  borders: {
    1: '1px solid',
    2: '2px solid',
  },

  borderR: {
    round: '99px',
    m: '16px',
    s: '8px',
    xs: '4px',
  },

  transition: {
    ms500: '0.5s',
    ms400: '0.4s',
    ms300: '0.3s',
  },
};

export { baseTheme, darkThemeColors, lightThemeColors };
