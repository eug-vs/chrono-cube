import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

import theme from "./theme";
import Header from './components/Header/Header';
import Timer from "./pages/Timer/Timer";
import Scoreboard from "./pages/Scoreboard/Scoreboard";
import Contribute from "./pages/Contribute/Contribute";


const App = () => {

  const [page, setPage] = useState('app');
  const [recentSolutions, setRecentSolutions] = useState([]);

  const Page = ({ page }) => {
    switch (page) {
      case 'app':
        return (
          <Timer
            recentSolutions={recentSolutions}
            setRecentSolutions={setRecentSolutions}
            setPage={setPage}
          />
        );

      case 'scoreboard':
        return (<Scoreboard />);

      case 'contribute':
        return (<Contribute />);

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
      <Page page={page} />
    </ThemeProvider>
  );
};

document.body.style.overflow = "hidden";
ReactDOM.render(<App />, document.getElementById('root'));
