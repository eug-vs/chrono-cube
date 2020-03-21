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
    background: theme.palette.background.elevation2,
  },
}));

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(<CircularProgress color="secondary" />)}
        title="Loading"
        subheader="Please, wait."
      />
    </Card>
  )
};

export default Loading;
