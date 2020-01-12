import React from 'react';
import Window from "../../components/Window/Window";

import {
  Button,
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

  const handleLogout = () => {
    setUser({ username: 'anonymous', id: null });
    localStorage.clear();
  };

  return (
    <>
      <Window type="primary">
        <div className={classes.primary}>
          { user.id? (
            <ContentSection sectionName={`Welcome back, ${user.username}`}>
              <p> You can always log out from your account! </p>
              <Button variant="contained" color="secondary" onClick={handleLogout}>
                Logout
              </Button>
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
