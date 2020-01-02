import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Typography,
  Box,
} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import theme from "./theme";
import Header from './components/Header/Header';
import Scoreboard from "./components/Scoreboard/Scoreboard";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));


const App = () => {

  const [page, setPage] = useState('app');

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header setPage={setPage}/>
      <Box className={classes.root}>
        <Typography variant="h4"> This is the {page} page! </Typography>
        {
          (page === 'scoreboard')?
          (<Scoreboard/>)
          :
          (
            <p>
              This text is rendered outside of <code>Header</code> component, but
              interacting with <code>Header</code> can influence content of this page!
            </p>
          )
        }
      </Box>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
