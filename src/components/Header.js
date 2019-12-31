import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography
} from "@material-ui/core";
import styled from 'styled-components';

const Header = () => (
  <AppBar position="static">
    <TabsWrapper>
      <Typography variant="h4" id="logo"> ChronoCube </Typography>
      <Tab label="Home" />
      <Tab label="App" />
      <Tab label="Scoreboard" />
      <Tab label="News" />
    </TabsWrapper>
  </AppBar>
);

const TabsWrapper = styled(Tabs)`
  border-bottom: 1px solid black;
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
