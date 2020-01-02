import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Timer = () => {
    const SPACE = 32
    const [time, setTime] = useState("00:00:00")
    const [stopwatchStarted, setStopwatchStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    let startingTime;

    
    const handleKeyPress = event => {
        if (event.keyCode === SPACE){
            if (!stopwatchStarted) {
                startingTime = Date.now();
                setStopwatchStarted(true);
                setTimer(setInterval(() => setTime(() => {
                    const timeGap = Math.floor((Date.now() - startingTime) / 10);
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
                }), 10))
            } else {
                clearInterval(timer)
                setStopwatchStarted(false);
                startingTime = 0;
                return false;
            }
        }
    }


    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress);

        return () => {
            window.removeEventListener("keypress", handleKeyPress);
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

export default Timer;
