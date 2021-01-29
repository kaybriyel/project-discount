import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Cardshopitem(props) {
  const { display, items } = props;

  return (
    <GridContainer>
      {display && items.map((item, key) => <Item key={key} {...item} />)}
    </GridContainer>
  );
}

const Item = (props) => {
  const classes = useStyles();
  const { name, discount, price } = props;
  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card>
        <CardHeader color="success">
          <h3>{name} Image</h3>
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>{name}</h4>
          <p className={classes.cardCategory}>
            <span className={classes.dangerText}>Full Price ${price}</span><br />
            <span className={classes.successText}>
              <ArrowDownward className={classes.upArrowCardCategory} /> {discount}%
            </span>
            {' '} On sale ${(price - (price * (discount/100))).toFixed(2)}
          </p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> updated 4 minutes ago
              </div>
        </CardFooter>
      </Card>
    </GridItem>

  );
}