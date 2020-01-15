import React from 'react';

import { Paper, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  surface: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    scrollbarColor: `${theme.palette.secondary.main} ${theme.palette.secondary.light}`,
  }
}));


const WindowSurface = ({ size, position, children }) => {
  const classes = useStyles();

  return (
    <Paper
      variant="outlined"
      style={{...size, ...position}}
      className={classes.surface}
    >
      {children}
    </Paper>
  )
};


export default WindowSurface;