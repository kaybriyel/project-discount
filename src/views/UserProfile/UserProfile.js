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

import { authenticate } from 'variables/fetchapi.js';
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
  const classes = useStyles();

  console.log('checking...');
  const [profile, setProfile] = useState({});
  const [signedUp, setSignedUp] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  console.log(signedIn, signedUp);
  const setter = { setProfile, setSignedUp, setSignedIn };
  useEffect(() => {
    let id = localStorage.auth;
    id && (id = JSON.parse(id)) &&
    (async () => {
      let data = await authenticate(id);
      data && setSignedIn(true);
      profile && !profile.id && setProfile(data);
    })();
  }, [signedIn]);


const Userprofile = () => {
  // const a = true;
  // if(a) return null;
  return (
    <Card profile>
      <CardAvatar profile>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={null} alt="" />
        </a>
      </CardAvatar>
      <CardBody profile>
        <h6 className={classes.cardCategory}>Information</h6>
        <h4 className={classes.cardTitle}>Please fill in all the input</h4>
        <p className={classes.description}>
              </p>
          <Button onClick={() => {setSignedUp(!signedUp)}} color="primary" round>
          {signedUp ? 'Sign up': 'Sign in'}
          </Button>
      </CardBody>
    </Card>
  );
}
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

