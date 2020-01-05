import React, { useState, useEffect } from 'react';

import {
  Container,
  Grid,
} from "@material-ui/core";

import { get, post } from '../../requests';

import SolutionCard from '../SolutionCard/SolutionCard';

const Profile = ({update, setUpdate, userId, setUserId}) => {
  const [userSolutions, setUserSolutions] = useState([]);
  const [userName, setUserName] = useState('');

  const removeSolution = id => {
    setUserSolutions(userSolutions.filter((solution => solution.id !== id)));
  };

  const addUser = event => {
    post('users/', {username: userName})
      .then(response => {
        setUserId(response.data.id);
      });
      event.preventDefault();
    };

  useEffect(() => {
    if (userId && !update) {
      setUpdate(true);
      get('solutions/')
        .then(response => {
          setUserSolutions(response.data.reverse().filter(solution => {
            if (solution.author) return solution.author.id === userId
          }))
        });
    }
  });

  const userSolutionCards = userSolutions.map(solution => (
    <Grid item key={solution.id}>
      <SolutionCard  data={solution} removeThisCard={removeSolution} />
    </Grid>
  ));


  return (
    <Container maxWidth="xs">

    {
      userId 
      ? (
          <Grid container justify="center" direction="column" spacing={3}>
            {
              userSolutionCards.length
              ? userSolutionCards
              : ( <h1>Welcome to ChronoCube, {userName}!</h1> )
            }
          </Grid>
      )
      : (
        <form onSubmit={addUser} >
            <label>Tell us who you are!</label>
            <input type='text' value={userName} onChange={event => setUserName(event.target.value)} />
            <input type='submit' value='Submit!' />
        </form>
      )
    }

    </Container>
  )
}

export default Profile;
