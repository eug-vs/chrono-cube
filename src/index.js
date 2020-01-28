import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BenzinThemeProvider,
  Header,
} from 'react-benzin-test';

import 'typeface-roboto';

import Timer from './pages/Timer/Timer';
import Scoreboard from './pages/Scoreboard/Scoreboard';
import Contribute from './pages/Contribute/Contribute';
import Profile from './pages/Profile/Profile';

import TimerIcon from '@material-ui/icons/Timer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GitHubIcon from '@material-ui/icons/GitHub';

import { get } from './requests';


const App = () => {

  const [page, setPage] = useState('app');
  const [user, setUser] = useState({ username: 'anonymous', id: null });
  const [recentSolutions, setRecentSolutions] = useState([]);

  const headerContents = {
    app: (<TimerIcon />),
    profile: (<AccountCircleIcon />),
    scoreboard: (<AssignmentIcon />),
    contribute: (<GitHubIcon />),
  };

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
    <BenzinThemeProvider>
      <Header
        logo={{
          title: 'ChronoCube'
        }}
        contents={headerContents}
        page={page}
        setPage={setPage}/>
      <Page page={page} />
    </BenzinThemeProvider>
  );
};

document.body.style.overflow = 'hidden';
ReactDOM.render(<App />, document.getElementById('root'));
