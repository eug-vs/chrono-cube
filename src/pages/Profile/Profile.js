import React from 'react';
import Window from "../../components/Window/Window";
import ContentSection from "../../components/ContentSection/ContentSection";

import {
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  primary: {
    padding: theme.spacing(4)
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <>
      <Window type="primary">
        <div className={classes.primary}>
          <ContentSection sectionName="Tell us who you are">
            <p> Here is some text about why you should register at ChronoCube: </p>
            <p>
              <TextField variant="outlined" color="secondary" label="Username" />
            </p>
            <Button variant="contained" color="secondary" size="large">
              Submit!
            </Button>
          </ContentSection>
        </div>
      </Window>
      <Window type="secondary" name="History">

      </Window>
    </>
  )
};


export default Profile;
