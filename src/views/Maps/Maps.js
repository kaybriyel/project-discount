// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
import Primary from "components/Typography/Primary.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import CardFooter from "components/Card/CardFooter.js";

// @material-ui/icons
// import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

import React, { useState, useEffect } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import { apiUrl } from 'variables/general.js';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const GoogleMapFun = () => {

  const [shops, setShops] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      let data;
      const res = await fetch(apiUrl + 'shops');
      res.ok && (data = (await res.json()).map(s => {s.display = true; return s;}));
      res.ok && setShops(data);
      console.log('loading location');
    })();
  }, [shops.length]
  );
  return (

    <GoogleMap
      defaultZoom={13}
      defaultCenter={shops[0] ? shops[0].location : { lat: 11.566862079045004, lng: 104.89618316900561 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]

      }}
    >
      {
        shops.map(item => {
          return (
            <div key={item.name} >
              <Marker
                position={item.location}
                onClick={() => {
                  item.display = true;
                  setShops([...shops])
                }}
              >
              </Marker>
              {item.display && (
                <InfoWindow
                  position={item.location}
                  clickable={true}
                  onCloseClick={() => {
                    item.display = false;
                    setShops([...shops])
                  }
                  }
                >
                  <GridItem>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>content_copy</Icon>
                        </CardIcon>
                        <p className={classes.cardCategory}>{item.category}</p>
                        <h3 className={classes.cardTitle}>
                          {item.name}
                        </h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <Primary>
                            Visit
                          </Primary>
                        </div>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </InfoWindow>
              )}
            </div>
          )
        })
      }
    </GoogleMap>
  );
}

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (

    <GoogleMapFun />

  ))
);

export default function Maps() {

  return (
    <CustomSkinMap

      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmAUtqoCL4BjnmMsXeKHkyfuogdxwWkl4"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}

    />
  );
}




