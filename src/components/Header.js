import React from "react";
import { Tab, Tabs, Typography } from "@material-ui/core";
import styled from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <Tabs>
      <Typography variant="h4" id="logo"> ChronoCube </Typography>
      <Tab label="Home" />
      <Tab label="App" />
      <Tab label="Scoreboard" />
      <Tab label="News" />
    </Tabs>
  </HeaderWrapper>

);

const HeaderWrapper = styled.div`
  border-bottom: 1px solid black;
  background-color: darkgrey;
  & .MuiTab-wrapper {
    padding: 10px;
  }
  & .MuiTypography-root {
    font-weight: bold;
    padding: 10px;
    margin-right: 50px;
    margin-left: 30px;
  }
`;

export default Header;
