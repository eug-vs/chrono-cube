import React from 'react';

import {
  Typography,
  Divider,
  makeStyles
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(0, 2, 1, 2),
    marginBottom: theme.spacing(1),

    '& a': {
      color: theme.palette.secondary.light,
    },
    '& .MuiButton-root': {
      color: theme.palette.background.paper,
      margin: theme.spacing(2, 2, 2, 0),
      fontWeight: 'bold',
    },
  },
}));

const ContentSection = ({ sectionName, children }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4">{sectionName}</Typography>
      <Divider variant="middle"/>
      <div className={classes.content}>
        {children}
      </div>
    </>
  );

};


export default ContentSection;
