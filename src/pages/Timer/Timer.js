import React from 'react';

import { post } from '../../requests';

import Window from '../../components/Window/Window';
import ContentSection from '../../components/ContentSection/ContentSection';
import TimerButton from './TimerButton/TimerButton';
import SmartList from '../../components/SmartList/SmartList';
import SolutionCard from '../../components/SolutionCard/SolutionCard';

import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  primary: {
    padding: theme.spacing(4),
  },
  cell: {
    padding: theme.spacing(5),
  },
}));

const Timer = ({ user, recentSolutions, setRecentSolutions, setPage }) => {
  const classes = useStyles();

  const registerResult = result => {
    const solution = { author_id: user.id, result };
    post('solutions/', solution).then(response => {
      setRecentSolutions([response.data].concat(recentSolutions));
    });
  };

  const handleLearnMore = () => {
    setPage('contribute');
  };

  const handleLogin = () => {
    setPage('profile');
  };

  const removeSolution = (id) => {
    setRecentSolutions(recentSolutions.filter((solution => solution.id !== id)));
  };

  const renderItem = ({ index, style }) => {
    const solution = recentSolutions[index];
    return (
      <div style={style} className={classes.cell}>
        <SolutionCard data={solution} removeThisCard={removeSolution} />
      </div>
    );
  };

  return (
    <>
      <Window type="primary">
        <div className={classes.primary}>
          <ContentSection sectionName="Welcome to ChronoCube!">
            <p>
              ChronoCube is a professional speedcubing timer.
              Share your results publicly - let everyone see your progress and
              achievements!
              Every speedcuber will benefit
              from using it - both amateur and professional!
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLearnMore}
            >
              Learn more
            </Button>
          </ContentSection>
          {user.id === null &&
          <ContentSection sectionName="Log into an account">
            <p> Tell us your name so we can track your progress</p>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              size="large"
            >
              Login
            </Button>
          </ContentSection>
          }
          <TimerButton registerResult={registerResult} />
        </div>
      </Window>
      <Window type="secondary" name="Recent solutions">
        <SmartList
          itemSize={270}
          itemCount={recentSolutions.length}
          renderItem={renderItem}
        />
      </Window>
    </>
  );
};


export default Timer;
