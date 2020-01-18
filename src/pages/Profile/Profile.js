import React, { useState, useEffect } from 'react';
import Window from '../../components/Window/Window';

import {
  Button,
  makeStyles,
} from '@material-ui/core';

import Registration from './Registration/Registration';
import ContentSection from '../../components/ContentSection/ContentSection';
import SmartList from '../../components/SmartList/SmartList';

import { get } from '../../requests';
import SolutionCard from '../../components/SolutionCard/SolutionCard';


const useStyles = makeStyles(theme => ({
  primary: {
    padding: theme.spacing(4),
  },
  cell: {
    padding: theme.spacing(5),
  },
}));


const Profile = ({ user, setUser }) => {
  const classes = useStyles();

  const [profileSolutions, setProfileSolutions] = useState([]);

  const handleLogout = () => {
    setUser({ username: 'anonymous', id: null });
    localStorage.clear();
  };

  useEffect(() => {
    get(`solutions/?author=${user.id}`).then(response => {
      setProfileSolutions(response.data.reverse());
    });
  }, [user]);

  const removeSolution = (id) => {
    setProfileSolutions(profileSolutions.filter((solution => solution.id !== id)));
  };

  const renderItem = ({ index, style }) => {
    return (
      <div style={style} className={classes.cell}>
        <SolutionCard data={profileSolutions[index]} removeThisCard={removeSolution} />
      </div>
    );
  };

  return (
    <>
      <Window type="primary">
        <div className={classes.primary}>
          { user.id? (
            <ContentSection sectionName={`Welcome back, ${user.username}!`}>
              <p> Total amount of solutions: {profileSolutions.length} </p>
              <p> You can always log out from your account! </p>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </ContentSection>
          ): (
            <Registration setUser={setUser} />
          )
          }
        </div>
      </Window>
      <Window type="secondary" name="History">
        <SmartList
          itemSize={270}
          itemCount={profileSolutions.length}
          renderItem={renderItem}
        />
      </Window>
    </>
  )
};


export default Profile;
