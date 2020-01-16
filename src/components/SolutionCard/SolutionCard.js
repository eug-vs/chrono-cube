import React, { useState } from 'react';

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
  Grid,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { del } from '../../requests';


const DATE_FORMAT = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),

    '& .MuiTypography-h3': {
      margin: theme.spacing(2),
    },
  },
}));

const SolutionCard = ({ data, removeThisCard }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const author = data.author? data.author.username : 'anonymous';
  const date = new Date(data.date);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    del(`solutions/${data.id}/`).then(() => {
      removeThisCard(data.id);
    });
    handleClose();
  };

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
        subheader={date.toLocaleString('default', DATE_FORMAT)}
        action={(
          <IconButton onClick={handleOpenMenu}>
            <MoreVertIcon />
          </IconButton>
        )}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <TimerIcon/>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              { data.result }
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default SolutionCard;
