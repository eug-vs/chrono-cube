import React from 'react';

import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Timer from "../Timer/Timer";
import SolutionCard from "../SolutionCard/SolutionCard";

import { post } from '../../requests';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(5, 4, 4, 4),
  },
}));

const TimerPage = ({ recentSolutions, setRecentSolutions, user }) => {
  const classes = useStyles();

  // const user = {
  //   id: null,
  //   username: 'anonymous',
  // };

  const registerResult = result => {
    const solution = { author_id: user.id, result };
    post('solutions/', solution).then(response => {
      setRecentSolutions([response.data].concat(recentSolutions));
    });
  };

  const removeSolution = (id) => {
    setRecentSolutions(recentSolutions.filter((solution => solution.id !== id)));
  };

  return (
    <Box className={classes.root}>
      <Grid container direction="row" justify="space-around" spacing={8}>
        <Grid item xs={6}>
          <Timer registerResult={registerResult} style={{ position: 'fixed' }}/>
        </Grid>
        <Grid item xs={4} container direction="column" spacing={5}>
          {recentSolutions.slice(0, 3).map(solution => (
            <Grid item key={solution.id}>
              <SolutionCard data={solution} removeThisCard={removeSolution}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};


export default TimerPage;
