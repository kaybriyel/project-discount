// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import CardFooter from "components/Card/CardFooter.js";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

import React, { useState, useEffect } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const GoogleMapFun = () => {

  const [location, setLocation] = useState([]);
  location.forEach(({ display }) => console.log('state', display));
  // locations.forEach(({display}) => console.log('location',display));

  const classes = useStyles();

  useEffect(() => {
    const loc = [
      {
        name: "rupp",
        display: true,
        location: {
          lat: 11.568469287836823,
          lng: 104.89062738135897
        }
      },
      {
        name: "football",
        display: true,
        location: {
          lat: 11.569804167388591, lng: 104.89155006118457
        }
      },
      {
        name: "sunfix",
        display: true,
        location: {
          lat: 11.5650331681146, lng: 104.89735261204038
        }
      },
      {
        name: "place1",
        display: true,
        location: {
          lat: 11.566862079045004, lng: 104.89618316900561
        }
      }
    ]


    console.log(location);
    setLocation(prev => {
      const locKey = prev.map(({ name }) => name);
      for (const l of loc) {
        const i = locKey.indexOf(l.name);
        if (i == -1) {
          prev.push(l);
        }
      }
      console.log(prev)
      return [...prev];
    });
  }
  );
  return (

    <GoogleMap
      defaultZoom={13}
      defaultCenter={location[0] ? location[0].location : { lat: 11.566862079045004, lng: 104.89618316900561 }}
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
        location.map(item => {
          return (
            <>
              <Marker key={item.name}
                position={item.location}
                onClick={() => {
                  item.display = true;
                  setLocation([...location])
                }}
              >
              </Marker>
              {item.display && (
                <InfoWindow
                  position={item.location}
                  clickable={true}
                  onCloseClick={() => {
                    item.display = false;
                    setLocation([...location])
                  }
                  }
                >
                  <GridItem>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>content_copy</Icon>
                        </CardIcon>
                        <p className={classes.cardCategory}>{item.name}</p>
                        <h3 className={classes.cardTitle}>
                          49/50 <small>GB</small>
                        </h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <Danger>
                            <Warning />
                          </Danger>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Get more space
                    </a>
                        </div>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </InfoWindow>
              )}
            </>
          )
        })
      }
    </GoogleMap>
  );
}

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (

    <GoogleMapFun></GoogleMapFun>

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




