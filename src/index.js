import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header/Header';


const App = () => {

  const [page, setPage] = useState('app');

  return (
    <Root>
      <CssBaseline/>
      <Header setPage={setPage} />
      <h1> This is the {page} page! </h1>
      <p>
        This text is rendered outside of <code>Header</code> component, but
        interacting with <code>Header</code> can influence content of this page!
      </p>
    </Root>
  );
};

const Root = styled.div`
  background: cornsilk;
  padding-bottom: 25px;
`;


ReactDOM.render(<App />, document.getElementById('root'));
