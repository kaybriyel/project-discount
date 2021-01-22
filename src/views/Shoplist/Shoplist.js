import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

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
      <Button onClick={() => {setText('Ordered')}} type="button" color="info">{text}</Button>
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
                <BTN cat="HOT COFFEE"/>
              </CardHeader>
              <CardBody>
                <div className={classes.typo}>
                  <div className={classes.note}></div>
                  <Primary>
                    Some products in {s}
                  </Primary>
                </div>
              </CardBody>
            </Card>
          );
        })
      }
    </div>
  );
}


/*
<Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>JC BAKERY</h4>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Some Categories</div>
          <Primary>

          </Primary>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}></div>
          <Primary>
            Some products
          </Primary>
        </div>
      </CardBody>
    </Card>

*/
