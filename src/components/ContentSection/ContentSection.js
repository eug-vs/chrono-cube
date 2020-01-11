import React from 'react';

import {
  Typography,
  Divider,
  makeStyles
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  }
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
