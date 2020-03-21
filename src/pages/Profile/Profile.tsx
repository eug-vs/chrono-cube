import React, { useState, useEffect } from 'react';

import {
  Button,
  makeStyles,
} from '@material-ui/core';

import Registration from './Registration';
import {
  Window,
  ContentSection,
  SmartList,
} from 'react-benzin';
import { User, Solution, RenderPropTypes } from '../../types';

import SolutionCard from '../../components/SolutionCard/SolutionCard';

import { get } from '../../requests';


const useStyles = makeStyles(theme => ({
  primary: {
    padding: theme.spacing(4),
  },
  cell: {
    padding: theme.spacing(5),
  },
}));


interface PropTypes {
  user: User;
  setUser: (user: User) => void;
}


const Profile: React.FC<PropTypes> = ({ user, setUser }) => {
  const classes = useStyles();

  const [profileSolutions, setProfileSolutions] = useState<Solution[]>([]);

  const handleLogout = (): void => {
    setUser({ username: 'anonymous', id: null });
    localStorage.clear();
  };

  useEffect(() => {
    get(`solutions/?author=${user.id}`).then(response => {
      setProfileSolutions(response.data.reverse());
    });
  }, [user]);

  const removeSolution = (id: number): void => {
    setProfileSolutions(profileSolutions.filter((solution => solution.id !== id)));
  };

  const renderItem: React.FC<RenderPropTypes> = ({ index, style }) => {
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
              <Button variant="contained" color="secondary" onClick={handleLogout}>
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
