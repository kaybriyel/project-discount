import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import base64encoding from "variables/base64encoder.js";
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

export default function Signup(props) {
  console.log('props', props);
  const classes = useStyles();
  const { setProfile, setSignedUp } = props;
  const submit = (e) => {
    e.preventDefault();
    const form = formData(e.target); //parse data from form
    const url = 'http://jsondbapp.herokuapp.com/users';
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.data)
    };

    const signUp = (user) => {
      alert("Signed up successfully");
      setProfile(user);
      setSignedUp(true);
    }
    if (form.valid)
      fetch(url, option)
        .then(res => {
          if (res.status == 201) res.json()
            .then(user => signUp(user));
          else if (res.status == 500) {
            alert(`${form.data.name} is already existed`)
          }
        });
    else alert(form.err);
  }

  return (
    <form onSubmit={e => submit(e)}>
      <Card>
        <CardHeader color="primary">
          <GridContainer>
            <GridItem xs={8} sm={8} md={8}>
              <h4 className={classes.cardTitleWhite}>Sign up</h4>
              <p className={classes.cardCategoryWhite}>To become our memeber</p>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <Button onClick={() => { setSignedUp(true) }} style={{ float: 'right' }} type="button" color="warning">Sign in</Button>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Username"
                id="username"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Full name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true,
                  type: 'password'
                }}
                inputProps={{ type: 'password' }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Confirm password"
                id="confirmpassword"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: 'password'
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Email"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: 'email'
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Phone"
                id="phone"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: 'tel'
                }}
              />
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <Button type="submit" color="primary">Sign up</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

const formData = ({ name, username, email, password, confirmpassword, phone }) => {
  let valid = true;
  let err = 'All field is required';
  const data = { name, username, email, password, confirmpassword, phone };

  for (const n in data) {
    const { value } = data[n];
    if (!value) valid = false;
    data[n] = value;
  }

  if (data.password !== data.confirmpassword) {
    valid = false;
    err = 'Password not match';
  }

  if (valid) {
    data.id = base64encoding((username.value + password.value));
    data.password = base64encoding(data.password);
  }

  return { valid, data, err };
}