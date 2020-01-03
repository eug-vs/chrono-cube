import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { post } from '../../requests';

const Timer = () => {
  const SPACE = 32;
  const maxCountdown = 15000;
  const [time, setTime] = useState("00:15:00");
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isCountdown, setIsCountdown] = useState(false);
  let startingTime;


  const handleKeyPress = event => {
    if (event.keyCode === SPACE && !isRunning ) {
      if (!isCountdown) {
        startingTime = Date.now();
        setIsCountdown(true);
        setTimer(setInterval(() => setTime(() => {
          const timeDiff = maxCountdown - (Date.now() - startingTime);
          if (timeDiff < 0) {
            setIsRunning(true);
            setTime('00:00:00');
            clearInterval(timer);
          }
          return convertTimeToString(timeDiff);
        }), 10));
      }
    }
  };

  const handleKeyUp = event => {
    clearInterval(timer);
    if (event.keyCode === SPACE){
      if (!isRunning) {
        startingTime = Date.now();
        setIsRunning(true);
        setTimer(setInterval(() => setTime(convertTimeToString((Date.now() - startingTime))), 10));
      } else {

        clearInterval(timer);
        setIsRunning(false);
        setIsCountdown(false);
        startingTime = 0;
        post('solutions/', {result: time});
        return false;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keypress", handleKeyPress);

    };
  });

  return (
    <Root>
      <span>{time}</ span>
    </Root>
  );
};

const Root = styled.div`
  background-color: skyblue;
  padding: 8px;
  display: inline-block;
  font-size: 32px;
  color: pink;
`;

const convertTimeToString = timeDiff => {
  let resultTime = "";

  const minute = Math.floor(timeDiff / 60000);
  if (minute < 10) resultTime += '0';
  resultTime += minute + ':';

  let second = Math.floor(timeDiff / 1000);
  if (second < 10) resultTime += '0';
  if (second > 59) second %= 60;
  resultTime += second + ':';

  const mill = Math.floor((timeDiff % 1000) / 10);
  if (mill < 10) resultTime += '0';
  resultTime += mill;

  return resultTime;
};

export default Timer;
