import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  Paper,
} from "@material-ui/core";

import styled from "styled-components";

const Solution = ({ solution }) => {

  const author = solution.author? solution.author : 'anonymous';
  return (
    <PaperWrapper elevation={2} style={{backgroundColor: "#ddbea3"}}>
      <Typography variant="h4" style={{fontWeight: "bold"}}>
        { solution.result }
      </Typography>
      <Typography>
        by {author}
      </Typography>
    </PaperWrapper>
  )
};

const PaperWrapper = styled(Card)`
  padding: 10px;
  margin: 25px;
`;

export default Solution;