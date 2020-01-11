import React from 'react';

import { post } from '../../requests';

import Window from "../../components/Window/Window";
import ContentSection from "../../components/ContentSection/ContentSection";
import Timer from "./Timer/Timer";
import SmartList from "../../components/SmartList/SmartList";
import SolutionCard from "../../components/SolutionCard/SolutionCard";

import { Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  primary: {
    padding: theme.spacing(4),
  },
  cell: {
    padding: theme.spacing(5),
  },
}));

const TimerPage = ({ recentSolutions, setRecentSolutions }) => {
  const classes = useStyles();

  const user = {
    id: null,
    username: 'anonymous',
  };

  const registerResult = result => {
    const solution = { author_id: user.id, result };
    post('solutions/', solution).then(response => {
      setRecentSolutions([response.data].concat(recentSolutions));
    });
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
            <Typography>
              Here is some text about how cool this application is, why you should use it
              and how to make it better!
            </Typography>
          </ContentSection>
          <Timer registerResult={registerResult} />
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


export default TimerPage;
