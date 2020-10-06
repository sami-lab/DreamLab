import { createMuiTheme } from '@material-ui/core/styles';

const archBlue = '#0b72b9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';
export default createMuiTheme({
  palette: {
    common: {
      blue: `${archBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${archBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${archBlue}`,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${archBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: `${archBlue}`,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: `${archBlue}`,
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Raleway',
      color: `${archBlue}`,
      fontWeight: 500,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontSize: '1.25em',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    caption: {
      fontSize: '1em',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    learnButton: {
      color: archBlue,
      borderColor: archBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: '700',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: archBlue,
        fontSize: '1rem',
      },
    },

    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `2px solid ${archBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${archBlue}`,
        },
      },
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
    },
  },
});
