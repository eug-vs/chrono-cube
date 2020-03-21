import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Window, SmartList } from 'react-benzin';
import { Solution } from '../../types';

import SolutionCard from '../../components/SolutionCard/SolutionCard';
import Loading from '../../components/Loading/Loading';

import { get } from '../../requests';


const useStyles = makeStyles(theme => ({
  cell: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4),

    '& .MuiCard-root': {
      width: '30%',
    }
  }
}));


interface RenderPropTypes {
  index: number;
  style: React.CSSProperties;
}


const Scoreboard: React.FC = () => {
  const classes = useStyles();
  const [solutions, setSolutions] = useState<Solution[]>([]);

  const updateSolutions = (): void => {
    get('scoreboard/').then(response => {
        setSolutions(response.data);
    });
  };

  const removeSolution = (id: number): void => {
    updateSolutions();
  };

  useEffect(() => {
    setTimeout(updateSolutions, 300);
  }, []);

  const renderItem: React.FC<RenderPropTypes> = ({ index, style }) => {
    return (
      <div style={style} className={classes.cell}>
        <SolutionCard data={solutions[index]} removeThisCard={removeSolution}/>
      </div>
    )
  };

  return (
    <Window type="mono">
      { solutions.length === 0 &&
      <div className={classes.cell}>
        <Loading/>
      </div>
      }
      <SmartList
        itemSize={300}
        itemCount={solutions.length}
        renderItem={renderItem}
      />
    </Window>
  )
};


export default Scoreboard;
