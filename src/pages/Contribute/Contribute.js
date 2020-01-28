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
} from '@material-ui/core';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BugReportIcon from '@material-ui/icons/BugReport';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

import { Window, ContentSection } from 'react-benzin';


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
          <p>
            ChronoCube is an Open-Source application, and we welcome anyone who desires to help our project!
          </p>
          <Button
            variant="contained"
            color="primary"
            startIcon={<TrendingUpIcon />}
            href="https://github.com/users/Eug-VS/projects/3"
          >
            Track our progress
          </Button>
        </ContentSection>
        <ContentSection sectionName="Technology stack">
          <p> We only use modern and most relevant technologies to achieve the best results! </p>
          <ul>
            <li><Link href="https://www.django-rest-framework.org/">
              Django REST Framework
            </Link></li>
            <li><Link href="https://reactjs.org/">
              React.js
            </Link></li>
            <li><Link href="https://material-ui.com/">
              Material UI components
            </Link></li>
          </ul>
          <p> Special thanks to other Open-Source projects which made ChronoCube possible: </p>
          <ul>
            <li><Link href="https://github.com/bvaughn/react-window">
              react-window
            </Link></li>
          </ul>
        </ContentSection>
        <ContentSection sectionName="How can I contribute to the project?">
          <p> Thank You for considering helping our project! </p>
          <p>
            All the development process is being tracked on
            the <Link href="https://github.com/users/Eug-VS/projects/3">KanBan board</Link>.
            You can always check it to see what is the current state of the project.
            To contribute your code, fork our repository and then open
            a <Link href="https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests">
            Pull Request</Link>. We will carefully review and, hopefully, accept it!
            If you are unfamiliar with this kind of workflow, we recommend
            reading <Link href="https://github.com/features/project-management/">GitHub guidelines</Link>.
          </p>
          <p>
            We always welcome newcomers! If you are unfamiliar with certain technologies or even with the
            development in general, it is great time to start learning something new!
            Our community will kindly assist every your step, and with us you can easily become
            highly-evaluated developer!
          </p>
          <Button
            variant="contained"
            color="primary"
            startIcon={<NewReleasesIcon />}
            href="https://github.com/Eug-VS/chrono-cube/issues/new"
          >
            Suggest feature
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BugReportIcon />}
            href="https://github.com/Eug-VS/chrono-cube/issues/new"
          >
            Report a bug
          </Button>
        </ContentSection>
        <ContentSection sectionName="Developers">
          <List>
            {
              developers.map(developer => {
                const githubUrl = `https://github.com/${developer.username}`;

                return (
                  <div key={developer.username}>
                    <ListItem>
                      <Link href={githubUrl}>
                        <Avatar alt={developer.username} src={`${githubUrl}.png`} />
                      </Link>
                      <div>
                        <Link href={githubUrl}>
                          {developer.username}
                        </Link>
                        <Typography component="div" color="textSecondary">
                          {developer.role}
                        </Typography>
                      </div>
                    </ListItem>
                    <Divider variant="middle" />
                  </div>
                )
              })
            }
            <ListItem>
              <Avatar />
              You can be here!
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
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
