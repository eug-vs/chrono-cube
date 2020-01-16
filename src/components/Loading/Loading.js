import React from 'react';

import {
  Card,
  CardHeader,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardHeader
        avatar={(<CircularProgress />)}
        title="Loading"
        subheader="Please, wait."
      />
    </Card>
  )
};

export default Loading;
