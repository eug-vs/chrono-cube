import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff6d00',
    },
    secondary: {
      main: '#9c27b0',
      contrastText: '#f4f4f4',
    },
    background: {
      default: '#121212',
      paper: '#121212',
      elevation1: '#1e1e1e',
      elevation2: '#232323',
      elevation3: '#252525',
      elevation4: '#272727',
      elevation6: '#2c2c2c',
      elevation8: '#2e2e2e',
      elevation12: '#333333',
      elevation16: '#363636',
      elevation24: '#383838',
    },
    text: {
      primary: '#f4f4f4',
      secondary: '#ce93d8',
    }
  },
});

export default theme;
