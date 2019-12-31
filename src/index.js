import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from "./components/Header";


const App = () => (
  <Root>
    <CssBaseline/>
    <Header/>
    <p> Page content here </p>
  </Root>
);

const Root = styled.div`
  background: lightgrey;
`;


ReactDOM.render(<App />, document.getElementById('root'));
