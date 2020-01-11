import React from 'react';

import {
  Typography,
  Link,
  Button,
  makeStyles,
} from "@material-ui/core";

import Window from "../../components/Window/Window";
import ContentSection from "../../components/ContentSection/ContentSection";


const useStyles = makeStyles(theme => ({
  mono: {
    padding: theme.spacing(4),
  }
}));


const Contribute = () => {
  const classes = useStyles();

  return (
    <Window type="mono">
      <div className={classes.mono}>
        <ContentSection sectionName="Thank You for using ChronoCube!">
          <Typography>
            <p>
              ChronoCube is an Open-Source application, and we welcome anyone who desires to help our project!
            </p>
          </Typography>
        </ContentSection>
        <ContentSection sectionName="Technology stack">
          <Typography>
            <p> We only use modern and most relevant technologies to achieve the best results! </p>
            <p>
              <ul>
                <li><Typography><a href="#">
                  Django REST Framework
                </a></Typography></li>
                <li><Typography><a href="#">
                  React.js
                </a></Typography></li>
                <li><Typography><a href="#">
                  Material UI components
                </a></Typography></li>
              </ul>
              <Typography> Special thanks to other Open-Source projects which made ChronoCube possible: </Typography>
              <ul>
                <li><Typography><a href="#">
                  react-window
                </a></Typography></li>
                <li><Typography><a href="#">
                  react-virtualized-auto-sizer
                </a></Typography></li>
              </ul>
            </p>
          </Typography>
        </ContentSection>
        <ContentSection sectionName="How can I contribute to the project?">
          <Typography>
            <p> Thank You for considering helping our project! </p>
            <p>
              All the development process is being tracked on
              the <a href="https://github.com/users/Eug-VS/projects/3">KanBan board</a>.
              You can always check it to see what is the current state of the project.
              To contribute your code, fork our repository and then open
              a <a href="https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests">
              Pull Request</a>. We will carefully review and, hopefully, accept it!
              If you are unfamiliar with this kind of workflow, we recommend
              reading <a href="https://github.com/features/project-management/">GitHub guidelines</a>.
            </p>
            <p>
              We always welcome newcomers! If you are unfamiliar with certain technologies or even with the
              development in general, it is great time to start learning something new!
              Our community will kindly assist every your step, and with us you can easily become
              highly-evaluated developer!
            </p>
          </Typography>
          <Button variant="contained" color="secondary" href="https://github.com/Eug-VS/chrono-cube/issues/new">
            Suggest feature
          </Button>
          <Button variant="contained" color="secondary" href="https://github.com/Eug-VS/chrono-cube/issues/new">
            Report a bug
          </Button>
        </ContentSection>
      </div>
    </Window>
  );

};


export default Contribute;
