import React, { useState, useEffect } from 'react';

import {
  Container,
  Grid
} from '@material-ui/core';

import { get, post } from '../../requests';
import SolutionCard from '../SolutionCard/SolutionCard';


const Profile = ({user, setUser}) => {
  const [profileSolutions, setProfileSolutions] = useState([]);


  const removeSolution = id => {
    setProfileSolutions(profileSolutions.filter((solution => solution.id !== id)));
  };

  const addUser = event => {
    post('users/', {username: user.username})
      .then(response => {
        setUser({...user, id: response.data.id});
      });
      event.preventDefault();
    };

  useEffect(() => {
    if (user.id) {
      get(`solutions/?author=${user.id}`)
        .then(response => {
          setProfileSolutions(response.data.reverse());
        });
    }
  }, []);

  const userSolutionCards = profileSolutions.map(solution => (
    <Grid item key={solution.id}>
      <SolutionCard  data={solution} removeThisCard={removeSolution} />
    </Grid>
  ));

console.log(user);
  return (
    <Container maxWidth="xs">
    {
      user.id 
      ? (
          <Grid container justify="center" direction="column" spacing={3}>
            {
              userSolutionCards.length
              ? userSolutionCards
              : ( <h1>Welcome to ChronoCube, {user.username}!</h1> )
            }
          </Grid>
      )
      : (
        <form onSubmit={addUser} >
            <label>Tell us who you are!</label>
            <input type='text' value={user.username} onChange={event => setUser({...user, username: event.target.value})} />
            <input type='submit' value='Submit!' />
        </form>
      )
    }
    </Container>
  )
}

export default Profile;
