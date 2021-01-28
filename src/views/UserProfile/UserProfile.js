import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import { apiUrl } from 'variables/general.js';
import Signin from './SigninForm/Signin';
import Signup from './SignupForm/Signup';
import UpdateProfile from './UpdateProfileForm/UpadateForm';
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  console.log('checking...');
  const [profile, setProfile] = useState({});
  const [signedUp, setSignedUp] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  console.log(signedIn, signedUp);
  const setter = { setProfile, setSignedUp, setSignedIn };
  useEffect(() => {
    let id = localStorage.auth;
    let data;
    id && (id = JSON.parse(id));
    console.log(id);
    id && (async () => {
      //  get from login list
      let res = await fetch(`${apiUrl}login/${id}`);
      console.log('Authenticating...');
      res.ok && (data = await res.json());
      // if logged in, get from users
      res.ok && (res = await fetch(`${apiUrl}users/${id}`)); // get full profile
      res.ok && (data = await res.json());
      console.log(signedIn, data);
      data && setSignedIn(true);
      console.log('>>> Authenticated');
      !profile.id && setProfile(data);
    })();
  }, [signedIn]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          {(!signedUp) && (signedIn ? <UpdateProfile {...profile} {...setter} /> : <Signup {...profile} {...setter} />)}
          {signedUp && (signedIn ? <UpdateProfile {...profile} {...setter} /> : <Signin {...profile} {...setter} />)}
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Userprofile />
        </GridItem>
      </GridContainer>
    </div>
  );
}


const Userprofile = () => {
  const classes = useStyles();
  return (
    <Card profile>
      <CardAvatar profile>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={avatar} alt="..." />
        </a>
      </CardAvatar>
      <CardBody profile>
        <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
        <h4 className={classes.cardTitle}>Alec Thompson</h4>
        <p className={classes.description}>
          Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
        <Button color="primary" round>
          Follow
              </Button>
      </CardBody>
    </Card>
  );
}