import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
      textDecoration: "none",
      cursor: 'pointer'
    },
};
const useStyles = makeStyles(styles);

const Shop = (props) => {
    const classes = useStyles();
    const [display, setDisplay] = useState(props.display);
    const toggleItem = () => {
        setDisplay(prev => {
            if (prev == '') return 'd-none';
            else return '';
        });
    }

    const BTN = (prop) => {
        const [text, setText] = useState(prop.cat);
        return (
            <Button type="button" color="info">{text}</Button>
        );
    }

    //will replace by categories in shops from API
    const category = ["HOT DRINK", "SOFT DRINK", "FRAPPE", "ICE & CREAM"];
    return (
        <Card key={props.name}>
            <CardHeader color="info">
                <h4 onClick={toggleItem} className={classes.cardTitleWhite}>{props.name}</h4>
                <BTN cat={category[0]} />
                <BTN cat={category[1]} />
                <BTN cat={category[2]} />
                <BTN cat={category[3]} />
            </CardHeader>
            <CardBody>
                <Cardshopitem display={display} color="info" />
            </CardBody>
        </Card>
    );
}

export default Shop;