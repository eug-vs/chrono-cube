import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography
} from "@material-ui/core";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.dark,
  },
  logo: {
    color: theme.palette.orange.main,
    margin: theme.spacing(2, 3, 2, 2)
  },
}));


const Header = ({ setPage }) => {
  const classes = useStyles();

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  const menuItems = ['app', 'profile', 'scoreboard', 'news'];

  return (
  <AppBar position="sticky" className={classes.header}>
    <Tabs onChange={handleChange}>
      <Typography variant="h4" className={classes.logo}> ChronoCube </Typography>
      { menuItems.map(menuItem => (
        <Tab label={menuItem} value={menuItem}/>
      ))}
    </Tabs>
  </AppBar>
  );
};

export default Header;
