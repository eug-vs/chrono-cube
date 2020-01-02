import React, {useEffect, useState} from 'react';

import { Container } from "@material-ui/core";

import { get } from "../../requests";
import Solution from "./Solution";


const Scoreboard = () => {
  const [solutions, setSolutions] = useState([]);

  const updateSolutions = async () => {
    const response = await get('solutions/');
    await setSolutions(response.data);
  };

  useEffect(() => {
    updateSolutions();
  }, []);


  return (
    <Container maxWidth="sm">
      {solutions.map(solution => (<Solution solution={solution}/>))}
    </Container>
  );
};

export default Scoreboard;
