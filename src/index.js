import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Box } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import theme from "./theme";
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import Scoreboard from "./components/Scoreboard/Scoreboard";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));


const App = () => {

  const [page, setPage] = useState('app');

  const classes = useStyles();

  const getPageComponent = page => {
    switch (page) {
      case 'app':
        return (<Timer/>);
      case 'scoreboard':
        return (<Scoreboard/>);
      default:
        return (
          <p>
            This text is rendered outside of <code>Header</code> component, but
            interacting with <code>Header</code> can influence content of this page!
          </p>
        )
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header page={page} setPage={setPage}/>
      <Box className={classes.root}>
        { getPageComponent(page) }
      </Box>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
