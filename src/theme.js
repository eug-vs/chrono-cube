import { createMuiTheme } from '@material-ui/core/styles'
import createPalette from "@material-ui/core/styles/createPalette";

const colorScheme = {
  dark: '#232020',
  grey: '#3a3535',
  white: '#f4f4f4',
  orange: '#ff7315',
};

const palette = createPalette({
  primary: {
    main: colorScheme.dark,
  },
  secondary: {
    main: colorScheme.grey,
  },
  white: {
    main: colorScheme.white,
  },
  orange: {
    main: colorScheme.orange,
  },
});

palette.background = {
  default: palette.secondary.main,
  paper: palette.secondary.dark,
};

palette.text = {
  primary: palette.white.main,
  secondary: palette.orange.main,
};

const theme = createMuiTheme({
  palette
});

export default theme;
