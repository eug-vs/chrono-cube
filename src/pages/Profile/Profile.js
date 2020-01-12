import React from 'react';
import Window from "../../components/Window/Window";

import {
  makeStyles,
} from "@material-ui/core";
import Registration from "./Registration/Registration";
import ContentSection from "../../components/ContentSection/ContentSection";


const useStyles = makeStyles(theme => ({
  primary: {
    padding: theme.spacing(4)
  },
}));


const Profile = ({ user, setUser }) => {
  const classes = useStyles();

  return (
    <>
      <Window type="primary">
        <div className={classes.primary}>
          { user.id? (
            <ContentSection sectionName={`Welcome back, ${user.username}`}>

            </ContentSection>
          ): (
            <Registration setUser={setUser} />
          )
          }
        </div>
      </Window>
      <Window type="secondary" name="History">

      </Window>
    </>
  )
};


export default Profile;
