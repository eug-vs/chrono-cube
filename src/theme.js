import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3a3535',
      main: '#232020',
    },
    secondary: {
      main: '#f4f4f4',
      dark: '#ff7315',
    },
  },
});

export default theme;
