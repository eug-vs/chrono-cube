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
      paper: '#121212',
      elevation1: '#1e1e1e',
      elevation2: '#232323',
      elevation3: '#252525',
    },
    text: {
      primary: '#f4f4f4',
    }
  },
});

export default theme;
