import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Box } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import theme from "./theme";
import Header from './components/Header/Header';
import TimerPage from "./components/TimerPage/TimerPage";
import Scoreboard from "./components/Scoreboard/Scoreboard";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));


const App = () => {

  const [page, setPage] = useState('app');
  const [recentSolutions, setRecentSolutions] = useState([]);
  const [userId, setUserId] = useState(0);
  const [isUserSolutionsUpdated, setIsUserSolutionsUpdated] = useState(false);

  const classes = useStyles();

  const getPageComponent = page => {
    switch (page) {
      case 'app':
        return (
          <TimerPage
            recentSolutions={recentSolutions}
            setRecentSolutions={setRecentSolutions}
          />
        );
      case 'scoreboard':
        return (<Scoreboard />);
      case 'profile':
        return (<Profile 
                    update={isUserSolutionsUpdated} 
                    setUpdate={setIsUserSolutionsUpdated} 
                    userId={userId} 
                    setUserId={setUserId} />)
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
