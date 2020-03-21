import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BenzinThemeProvider,
  Header,
} from 'react-benzin';

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

interface User {
  username: string;
  id: number | null;
}

const App: React.FC = () => {
  const [page, setPage] = useState<string>('app');
  const [user, setUser] = useState<User>({ username: 'anonymous', id: null });
  const [recentSolutions, setRecentSolutions] = useState([]);

  const headerContents = {
    app: (<TimerIcon />),
    profile: (<AccountCircleIcon />),
    scoreboard: (<AssignmentIcon />),
    contribute: (<GitHubIcon />),
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      get('users/').then(response => {
        setUser(response.data.filter((user: User) => user.id === +userId)[0]);
      });
    }
  }, []);

  const Page: React.FC<{ page: string }> = ({ page }) => {
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
          title: 'ChronoCube',
          icon: null
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
