import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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

export default function Signin() {
  const classes = useStyles();
  const submit = (e) => {
    e.preventDefault();
    const signIn = (user) => {
      alert('Welcome ' + user.username);
    }
    fetch('http://localhost:3001/users/alec').then(res => res.json()).then(user => signIn(user));
  }

  return (
    <form onSubmit={e => submit(e)}>
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Sign in</h4>
        <p className={classes.cardCategoryWhite}>To manage your shop</p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Username"
              id="username"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              type = 'password'
              labelText="Password"
              id="password"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
     </CardBody>
      <CardFooter>
        <Button type="submit" color="primary">Sign in</Button>
      </CardFooter>
    </Card>
    </form>
  );
}
