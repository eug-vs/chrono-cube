import React, { useState, useEffect } from 'react';

import {
  Container,
  Grid,
  Input,
  Typography
} from '@material-ui/core';

import { get, post } from '../../requests';
import SolutionCard from '../SolutionCard/SolutionCard';
import Loading from "../Loading/Loading";


const Profile = ({user, setUser}) => {
  const [profileSolutions, setProfileSolutions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const removeSolution = id => {
    setProfileSolutions(profileSolutions.filter((solution => solution.id !== id)));
  };

  const addUser = event => {
    post('users/', {username: user.username})
      .then(response => {
        setUser({...user, id: response.data.id});
        setIsLoading(false);
      });
      event.preventDefault();
    };

  useEffect(() => {
    if (user.id) {
      get(`solutions/?author=${user.id}`)
        .then(response => {
          if (!response.data.length) setIsLoading(false);
          setTimeout(() => {
            setProfileSolutions(response.data.reverse());
          }, 300);
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
    <div>
    {
      user.id 
      ? (
        <Container maxWidth="xs">
          <Grid container justify="center" direction="column" spacing={3}>
            {
              userSolutionCards.length
              ? userSolutionCards
              : isLoading ? (<Loading />) : ( <h1>Welcome to ChronoCube, {user.username}!</h1> )
            }
          </Grid>
        </Container>

      )
      : (
        <form onSubmit={addUser} >
          <Container maxWidth="xs">
            <Grid container justify="center" direction="column" spacing={3}>
              <Typography>Tell us who you are</Typography>
              <Input autoFocus='true' type='text' value={user.username} onChange={event => setUser({...user, username: event.target.value})} />
              <Input type='submit' value='Submit!' />
            </Grid>
          </Container>
        </form>
      )
    }
    </div>
  )
}

export default Profile;
