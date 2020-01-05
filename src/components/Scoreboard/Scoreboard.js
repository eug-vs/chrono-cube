import React, { useEffect, useState } from 'react';

import {
  Container,
  Typography,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { get } from "../../requests";
import SolutionCard from "../SolutionCard/SolutionCard";
import Loading from "../Loading/Loading";


const useStyles = makeStyles(theme => ({
  pageHeader: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
}));

const Scoreboard = () => {
  const classes = useStyles();
  const [solutions, setSolutions] = useState([]);

  const updateSolutions = () => {
    get('solutions/').then(response => {
      setTimeout(() => {
        setSolutions(response.data);
      }, 300);
    });
  };

  const removeSolution = (id) => {
    setSolutions(solutions.filter((solution => solution.id !== id)));
  };

  useEffect(() => {
    updateSolutions();
  }, []);

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" className={classes.pageHeader}>
        Scoreboard
      </Typography>
      {(solutions.length === 0) && <Loading />}
      <Grid container justify="center" direction="column" spacing={3}>
        {solutions.map(solution => (
          <Grid item key={solution.id}>
            <SolutionCard data={solution} removeThisCard={removeSolution}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Scoreboard;
