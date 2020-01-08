import React from 'react';

import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    scrollbarColor: `${theme.palette.primary.dark} ${theme.palette.primary.light}`,
  }
}));


const SmartList = ({ itemSize, itemCount, renderItem }) => {
  const classes = useStyles();

  return (
    <div style={{ flex: '1 1 auto'}}>
      <AutoSizer>
        {({ width, height }) => (
          <FixedSizeList
            height={height}
            width={width}
            itemSize={itemSize}
            itemCount={itemCount}
            className={classes.root}
          >
            {renderItem}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};


export default SmartList;
