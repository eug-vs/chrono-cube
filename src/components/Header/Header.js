import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  logo: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(0, 2, 0, 3)
  },
  tab: {
    padding: theme.spacing(3, 0, 3, 0)
  },
}));


const Header = ({ page, setPage }) => {
  const classes = useStyles();

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  const menuItems = ['app', 'profile', 'scoreboard', 'news'];

  return (
  <AppBar position="sticky" className={classes.header}>
    <Toolbar>
      <Typography variant="h4" className={classes.logo}> ChronoCube </Typography>
      <Tabs onChange={handleChange} value={page}>
        { menuItems.map(menuItem => (
          <Tab label={menuItem} value={menuItem} key={menuItem} className={classes.tab}/>
        ))}
      </Tabs>
    </Toolbar>
  </AppBar>
  );
};

export default Header;
