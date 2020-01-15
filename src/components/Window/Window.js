import React from 'react';

import { Typography, Divider, makeStyles } from "@material-ui/core";

import WindowSurface from "./WindowSurface/WindowSurface";


const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(1, 0, 1, 2),
  },
}));


const Window = ({ type, name, children }) => {
  const classes = useStyles();

  const size = {
    height: '85vh',
  };

  const position = {
    bottom: '3vh',
  };

  if (type === 'primary') {
    size.width = '63vw';
    position.left = '2vw';
  } else if (type === 'secondary') {
    size.width = '31vw';
    position.right = '2vw';
  } else if (type === 'mono') {
    position.left = '2vw';
    position.right = '2vw';
  }

  return (
    <WindowSurface
      size={size}
      position={position}
    >
      {name &&
      <div>
        <Typography variant="h5" className={classes.header}>{name}</Typography>
        <Divider />
      </div>
      }
      {children}
    </WindowSurface>
  );
};


export default Window;
