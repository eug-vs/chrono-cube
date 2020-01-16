import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff6d00',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#f4f4f4',
    }
  },
});

export default theme;
