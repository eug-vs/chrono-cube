import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import {post} from '../../requests';

const Timer = () => {
    const SPACE = 32
    const [time, setTime] = useState("00:00:00")
    const [running, setRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    let startingTime;

    
    const handleKeyUp = event => {
        if (event.keyCode === SPACE){
            if (!running) {
                startingTime = Date.now();
                setRunning(true);
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

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
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
