import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { post } from '../../requests';

const Timer = () => {
    const SPACE = 32;
    const countdownInMills = 15000;
    const [time, setTime] = useState("00:15:00");
    const [running, setRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [countdown, setCountdown] = useState(0);
    const [countdownRunning, setCountdownRunning] = useState(false);
    let startingTime;


    const handleKeyDown = event => {
        if (event.keyCode === SPACE && !running ) {

            let timeGap =  Date.now() - countdown;
            if (!countdownRunning) {
                setCountdown(Date.now());
                setCountdownRunning(true);
                timeGap = 0;
            }

            if (timeGap >= countdownInMills) {
                setRunning(true);
                setTime('00:00:00');
                return;
            }

            setTime(displayTime(countdownInMills - timeGap));
        }
    }

    
    const handleKeyUp = event => {
        setCountdownRunning(false);
        if (event.keyCode === SPACE){
            if (!running) {
                startingTime = Date.now();
                setRunning(true);
                setTimer(setInterval(() => setTime(displayTime((Date.now() - startingTime))), 10));
            } else {
                clearInterval(timer);
                setRunning(false);
                startingTime = 0;
                post('solutions/', {result: time});
                return false;
            }
        }
    }


    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("keydown", handleKeyDown);

        };
    })


    return (
        <Root>
            <span>{time}</ span>
        </Root>
    );

}

const Root = styled.div`
    background-color: skyblue;
    padding: 8px;
    display: inline-block;
    font-size: 32px;
    color: pink;
`;

const displayTime = timeDiff => {
    const timeGap = Math.floor(timeDiff / 10);
    let resultTime = "";

    const minute = Math.floor(timeGap / 6000);
    if (minute < 10) resultTime += '0';
    resultTime += minute + ':';

    let second = Math.floor(timeGap / 100);
    if (second < 10) resultTime += '0';
    if (second > 59) second %= 60
    resultTime += second + ':';

    const mill = timeGap % 100;
    if (mill < 10) resultTime += '0';
    resultTime += mill;

    return resultTime;
};

export default Timer;
