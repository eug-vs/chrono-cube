import React, {useState} from 'react';

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@material-ui/core';

import { ContentSection } from 'react-benzin-test';
import { get, post } from '../../../requests';


const Registration = ({ setUser }) => {

  const [username, setUsername] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCheck = (event) => {
    setIsRememberMe(event.target.checked);
  };

  const handleSubmit = () => {
    if (username !== '') {
      post('users/', { username })
        .then(response => {
          const user = response.data;
          setUser(user);
          if (isRememberMe) {
            localStorage.setItem('userId', user.id);
          }
        })
        .catch(err => {
          get('users/').then(response => {
            const user = response.data.filter(user => user.username === username)[0];
            setUser(user);
            if (isRememberMe) {
              localStorage.setItem('userId', user.id);
            }
          });
        });
    }
  };

  return (
    <ContentSection sectionName="Tell us who you are">
      <p> Choose yourself a username to track your progress and compete with others: </p>
      <Grid container direction="column">
        <Grid item>
          <TextField
            variant="outlined"
            color="secondary"
            label="Username"
            value={username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox color="secondary" onChange={handleCheck} />}
            label="Remember me"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit!
          </Button>
        </Grid>
      </Grid>
    </ContentSection>
  );
};


export default Registration;
