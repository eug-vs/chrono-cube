import React, { useEffect, useState } from 'react';

import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { get } from "../../requests";
import SolutionCard from "../../SolutionCard/SolutionCard";


const useStyles = makeStyles(theme => ({
  pageName: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
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
      <Typography variant="h3" className={classes.pageName}>
        Scoreboard
      </Typography>
      <Grid container direction="column" justify="center" spacing="3">
        {
          solutions.map(solution => (
            <Grid item>
              <SolutionCard data={solution}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};

export default Scoreboard;
