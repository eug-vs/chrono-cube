import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Typography,
  Paper,
  Container,
} from "@material-ui/core";

import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import Scoreboard from "./components/Scoreboard/Scoreboard";


const App = () => {

  const [page, setPage] = useState('app');

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
    <Root>
      <CssBaseline/>
      <Header setPage={setPage} />
      <Container maxWidth="xl">
        <Paper elevation={4} style={{backgroundColor: "bisque"}}>
          <Typography variant="h4"> This is the {page} page! </Typography>
          { getPageComponent(page) }
        </Paper>
      </Container>
    </Root>
);
};
const Root = styled.div`
  background: cornsilk;
  padding-bottom: 25px;
`;


ReactDOM.render(<App />, document.getElementById('root'));
