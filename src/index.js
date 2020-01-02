import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from "./theme";
import Header from './components/Header/Header';
import Scoreboard from "./components/Scoreboard/Scoreboard";


const App = () => {

  const [page, setPage] = useState('app');

  return (
    <Root>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Header setPage={setPage} />
        <Container maxWidth="xl">
          <Paper elevation={4} >
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
          </Paper>
        </Container>
      </ThemeProvider>
    </Root>
  );
};

const Root = styled.div`
`;


ReactDOM.render(<App />, document.getElementById('root'));
