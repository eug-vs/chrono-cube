import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

import theme from './theme';
import Header from './components/Header/Header';
import Timer from './pages/Timer/Timer';
import Scoreboard from './pages/Scoreboard/Scoreboard';
import Contribute from './pages/Contribute/Contribute';
import Profile from './pages/Profile/Profile';

import { get } from './requests';


const App = () => {

  const [page, setPage] = useState('app');
  const [user, setUser] = useState({ username: 'anonymous', id: null });
  const [recentSolutions, setRecentSolutions] = useState([]);

  useEffect(() => {
    const userId = +localStorage.getItem('userId');
    if (userId) {
      get('users/').then(response => {
        setUser(response.data.filter(user => user.id === +userId)[0]);
      });
    }
  }, []);

  const Page = ({ page }) => {
    switch (page) {
      case 'app':
        return (
          <Timer
            user={user}
            recentSolutions={recentSolutions}
            setRecentSolutions={setRecentSolutions}
            setPage={setPage}
          />
        );

      case 'profile':
        return <Profile user={user} setUser={setUser} />;

      case 'scoreboard':
        return <Scoreboard />;

      case 'contribute':
        return <Contribute />;

      default:
        return <Contribute />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header page={page} setPage={setPage}/>
      <Page page={page} />
    </ThemeProvider>
  );
};

document.body.style.overflow = 'hidden';
ReactDOM.render(<App />, document.getElementById('root'));
