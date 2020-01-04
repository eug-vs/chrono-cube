import React from 'react';

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TimerIcon from '@material-ui/icons/Timer';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),

    '& .MuiCardContent-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& .MuiTypography-h3': {
      color: theme.palette.secondary.main,
      margin: theme.spacing(2),
    },
  },

}));

const SolutionCard = ({ solution }) => {
  const classes = useStyles();

  const author = solution.author? solution.author.username : 'anonymous';
  return (
    <Card elevation={5} className={classes.root}>
      <CardHeader
        avatar={
          author === 'anonymous'?
            (<Avatar/>)
            :
            (<Avatar>{author[0].toUpperCase()}</Avatar>)
        }
        title={author}
        subheader="04.01.2020 13:20"
        action={(
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        )}
      />
      <CardContent>
        <TimerIcon/>
        <Typography variant="h3">
          { solution.result }
        </Typography>
      </CardContent>

    </Card>
  )
};

export default SolutionCard;
