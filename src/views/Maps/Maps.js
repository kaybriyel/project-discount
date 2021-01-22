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

import React, { useState } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const locations = [
  {
    name: "rupp",
    location: {
      lat: 11.568469287836823,
      lng: 104.89062738135897
    }
  },
  {
    name: "football",
    location: {
      lat: 11.569804167388591, lng: 104.89155006118457
    }
  },
  {
    name: "sunfix",
    location: {
      lat: 11.5650331681146, lng: 104.89735261204038
    }
  },
  {
    name: "place1",
    location: {
      lat: 11.566862079045004, lng: 104.89618316900561
    }
  }
];

const useStyles = makeStyles(styles);
const GoogleMapFun = () => {
  const [selected, setSelected] = useState({});
  const classes = useStyles();
  const onSelect = item => {
    setSelected(item);
  }
  return (

    <GoogleMap
      defaultZoom={13}
      defaultCenter={locations[0].location}
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
        locations.map(item => {
          return (
            <Marker key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          )
        })
      }
      {
        selected.location &&
        (
          <InfoWindow
            position={selected.location}
            clickable={true}

            onCloseClick={() => setSelected({})}
          >
           

            <GridContainer>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                      <Icon>content_copy</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Used Space</p>
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
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                      <Store />
                    </CardIcon>
                    <p className={classes.cardCategory}>Revenue</p>
                    <h3 className={classes.cardTitle}>$34,245</h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <DateRange />
                Last 24 Hours
              </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                      <Icon>info_outline</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Fixed Issues</p>
                    <h3 className={classes.cardTitle}>75</h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <LocalOffer />
                Tracked from Github
              </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <Accessibility />
                    </CardIcon>
                    <p className={classes.cardCategory}>Followers</p>
                    <h3 className={classes.cardTitle}>+245</h3>
                  </CardHeader>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <Update />
                Just Updated
              </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>

          </InfoWindow>
        )
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
  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  return (
    <CustomSkinMap

      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmAUtqoCL4BjnmMsXeKHkyfuogdxwWkl4"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}

    />
  );
}
