import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Box } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import theme from "./theme";
import Header from './components/Header/Header';
import TimerPage from "./components/TimerPage/TimerPage";
import Profile from './components/Profile/Profile';
import Scoreboard from "./components/Scoreboard/Scoreboard";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));


const App = () => {

  const [page, setPage] = useState('app');
  const [recentSolutions, setRecentSolutions] = useState([]);
  const [user, setUser] = useState({
    id: null,
    username: 'anonymous',
  });

  const classes = useStyles();

  const getPageComponent = page => {
    switch (page) {
      case 'app':
        return (
          <TimerPage
            recentSolutions={recentSolutions}
            setRecentSolutions={setRecentSolutions}
            user={user}
          />
        );
      case 'scoreboard':
        return (<Scoreboard />);
      case 'profile':
        return (<Profile user={user} setUser={setUser} />)
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
