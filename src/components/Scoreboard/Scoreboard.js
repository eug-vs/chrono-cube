import React, { useEffect, useState } from 'react';

import {
  Container,
  Typography,
  Grid,
} from "@material-ui/core";

import { get } from "../../requests";
import SolutionCard from "../SolutionCard/SolutionCard";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  pageHeader: {
    textAlign: 'center',
    margin: theme.spacing(2),
  }
}));

const Scoreboard = () => {
  const classes = useStyles();
  const [solutions, setSolutions] = useState([]);

  const updateSolutions = async () => {
    const response = await get('solutions/');
    await setSolutions(response.data);
  };

  useEffect(() => {
    updateSolutions();
  }, []);

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" className={classes.pageHeader}>
        Scoreboard
      </Typography>
      <Grid container justify="center" direction="column" spacing={3}>
        {solutions.map(solution => (
          <Grid item>
            <SolutionCard solution={solution}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Scoreboard;
