import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Timer = () => {    
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [mill, setMill] = useState(0);
    const [time, setTime] = useState("00:00:00")
    const [stopwatchStart, setStopwatchStart] = useState(false);
    const [stopwatchTime, setStopwatchTime] = useState(0);
    
    const handleKeyDown = event => {
        if (event.keyCode === 32){

            if (!stopwatchStart) {
                setStopwatchTime(Date.now());
                setStopwatchStart(true);
            }

            const timeGap = Date.now() - stopwatchTime;
            setMill(Math.floor((timeGap % 1000) / 10));
            setSecond(Math.floor(timeGap / 1000));
            setMinute(Math.floor(timeGap / 60000));
            setTime(() => {
                let resultTime = "";
                if (minute < 10) resultTime += '0';
                resultTime += minute + ':';
                if (second < 10) resultTime += '0';
                resultTime += second + ':';
                if (mill < 10) resultTime += '0';
                resultTime += mill;
                return resultTime;
            });
        }
    }

    const handleKeyUp = event => {
        if (event.keyCode === 32) {
            setTime("00:00:00");
            setMill(0);
            setSecond(0);
            setMinute(0);
            setStopwatchStart(false);
            setStopwatchTime(0);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
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
