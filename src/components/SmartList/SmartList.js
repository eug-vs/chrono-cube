import React from 'react';

import { FixedSizeList } from "react-window";

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    scrollbarColor: `${theme.palette.primary.dark} ${theme.palette.primary.light}`,
  }
}));


const SmartList = ({ height, width, cellHeight, itemCount, renderItem }) => {
  const classes = useStyles();

  if (!height) {
    const windowHeight = window.innerHeight;
    const headerHeight = document.getElementsByClassName("MuiAppBar-root")[0].clientHeight;
    height = windowHeight - headerHeight
  }

  return (
    <FixedSizeList
      height={height}
      width={width}
      itemSize={cellHeight}
      itemCount={itemCount}
      className={classes.root}
    >
      {renderItem}
    </FixedSizeList>
  );
};


export default SmartList;
