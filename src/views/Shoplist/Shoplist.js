import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Primary from "components/Typography/Primary.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Cardshopitem from "components/Cardshopitem/Cardshopitem.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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

const shops = ['JC BAKERY', 'CAFE AMAZON', 'TOLE JOUSE', 'APPLE DONUT', 'PIZZA COMPANY'];
const useStyles = makeStyles(styles);

export default function Shoplist() {
  const classes = useStyles();
  const BTN = (prop) => {
    const [text, setText] = useState( prop.cat );

    return (
      <Button onClick={() => {setText('Ordered');}} type="button" color="info">{text}</Button>
    );
  }

  const Carditem = (prop) => {
    const [classname, setClassName] = useState( prop.className);
    return (
      <Cardshopitem className={classname}/>
    );
  }

  return (
    <div>
      {
        shops.map(s => {
          return (
            <Card key={s}>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>{s}</h4>
                <BTN cat="HOT DRINK"/>
                <BTN cat="SOFT DRINK"/>
                <BTN cat="FRAPPE"/>
                <BTN cat="ICE & CREAM"/>
              </CardHeader>
              <CardBody>
                <Carditem />
              </CardBody>
            </Card>
          );
        })
      }
    </div>
  );
}