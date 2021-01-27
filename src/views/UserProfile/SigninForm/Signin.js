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

export default function Signin(props) {
  console.log('props', props);
  const classes = useStyles();
  const { setSignedIn } = props;
  const submit = (e) => {
    e.preventDefault();
    const form = formData(e.target); //parse data from form
    const url = 'http://jsondbapp.herokuapp.com/';
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: form.id })
    };

    let curUser;
    const signIn = (id) => {
      alert("Welcome " + curUser.name);
      localStorage.authKey = id;
      setSignedIn(true);
    }
    if (form.valid)
      fetch(`${url}login/${form.id}`, { method: 'delete' })
        .then(res => {
          fetch(`${url}users/${form.id}`)
            .then(res => {
              if (res.status == 200) {
                res.json().then(user => {
                  curUser = user;
                  fetch(`${url}login`, option)
                    .then(res => {
                      if (res.status == 201) {
                        res.json().then(id => signIn(id));
                      }
                    })
                })
              } else if(res.status == 404) {
                alert('Authentication fails')
              }
            })
        });
    else alert('All field is required');
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
                value={props.username}
                labelText="Username"
                id="username"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: props.username
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: 'password'
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

const formData = ({ username, password }) => {
  let valid = true;
  let id;
  const { value: uname } = username;
  const { value: pwd } = password;

  if (!uname || !pwd) valid = false;

  if (valid)
    id = base64encoding((uname + pwd));
  return { valid, id };
}