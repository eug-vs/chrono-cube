import React from 'react';

import {
  Typography,
  Button,
  List,
  ListItem,
  Link,
  Avatar,
  Divider,
  makeStyles,
} from "@material-ui/core";

import Window from "../../components/Window/Window";
import ContentSection from "../../components/ContentSection/ContentSection";


const useStyles = makeStyles(theme => ({
  mono: {
    padding: theme.spacing(4),

    '& .MuiAvatar-root': {
      marginRight: theme.spacing(2),
      width: theme.spacing(6),
      height: theme.spacing(6),
    }
  },
}));


const developers = require('../../developers.json');


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
            <Button variant="contained" color="secondary" href="https://github.com/users/Eug-VS/projects/3">
              Track our progress
            </Button>
          </Typography>
        </ContentSection>
        <ContentSection sectionName="Technology stack">
          <Typography>
            <p> We only use modern and most relevant technologies to achieve the best results! </p>
            <p>
              <ul>
                <li><Typography><a href="https://www.django-rest-framework.org/">
                  Django REST Framework
                </a></Typography></li>
                <li><Typography><a href="https://reactjs.org/">
                  React.js
                </a></Typography></li>
                <li><Typography><a href="https://material-ui.com/">
                  Material UI components
                </a></Typography></li>
              </ul>
              <Typography> Special thanks to other Open-Source projects which made ChronoCube possible: </Typography>
              <ul>
                <li><Typography><a href="https://github.com/bvaughn/react-window">
                  react-window
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
        <ContentSection sectionName="Developers">
          <List>
            {
              developers.map(developer => {
                const githubUrl = `https://github.com/${developer.username}`;
                const avatarUrl = `${githubUrl}.png`;

                return (
                  <>
                    <ListItem>
                      <Link href={githubUrl}>
                        <Avatar alt={developer.username} src={avatarUrl} />
                      </Link>
                      <div>
                        <Link href={githubUrl}>
                          <Typography>
                            {developer.username}
                          </Typography>
                        </Link>
                        <Typography color="textSecondary">
                          {developer.role}
                        </Typography>
                      </div>
                    </ListItem>
                    <Divider variant="middle"/>
                  </>
                )
              })
            }
            <ListItem>
              <Avatar />
              <Typography>You can be here!</Typography>
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="https://github.com/users/Eug-VS/projects/3"
          >
            Join us!
          </Button>
        </ContentSection>
      </div>
    </Window>
  );
};


export default Contribute;
