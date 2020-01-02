import React, {useEffect, useState} from 'react';


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
    <div>
      { solutions.map(solution => <Solution solution={solution}/>) }
    </div>
  );
};

export default Scoreboard;