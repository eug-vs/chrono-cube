import React from 'react';

import {
  Typography,
  Card,
  Container,
  Box,
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TimerIcon from '@material-ui/icons/Timer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(3),
    width: theme.spacing(60),

    '& .MuiBox-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& .MuiTypography-h2': {
      color: theme.palette.secondary.main,
      margin: theme.spacing(2),
    },
  },

}));

const SolutionCard = ({ solution }) => {
  const classes = useStyles();

  const author = solution.author? solution.author : 'anonymous';
  return (
    <Card elevation={4} className={classes.item}>
      <Container maxWidth="xs">
        <Box>
          <TimerIcon/>
          <Typography variant="h2">
            { solution.result }
          </Typography>
        </Box>
      </Container>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
          <Typography variant="h6">
            By {author}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  )
};

export default SolutionCard;
