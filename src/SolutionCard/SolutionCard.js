import React from 'react';

import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TimerIcon from '@material-ui/icons/Timer';


const useStyles = makeStyles(theme => ({
  item: {
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(1),

    '& .MuiBox-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& .MuiTypography-h3': {
      color: theme.palette.orange.main,
      marginLeft: theme.spacing(1),
    },
  },
}));

const SolutionCard = ({ data }) => {
  const classes = useStyles();
  const author = data.author? data.author.username.toString() : 'anonymous';

  return (
    <Card elevation={5} className={classes.item}>
      <CardHeader
        avatar={
          author === 'anonymous'?
            (<Avatar/>)
            :
            (<Avatar>{author[0].toUpperCase()}</Avatar>)
        }
        title={author}
        subheader="04.01.2020 13:20"
      />
      <CardContent>
        <Box>
          <TimerIcon/>
          <Typography variant="h3">
            { data.result }
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};

export default SolutionCard;
