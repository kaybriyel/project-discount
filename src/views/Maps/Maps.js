import React, { useState } from "react";
import image from "../../assets/img/cover.jpeg"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

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


const GoogleMapFun = () => {
  const [selected, setSelected] = useState({});

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
           
            <div class="makeStyles-card-113">
              <div class="makeStyles-cardHeader-117 makeStyles-warningCardHeader-121 makeStyles-cardHeaderStats-119 makeStyles-cardHeaderIcon-120">
                <div class="makeStyles-cardIcon-127 makeStyles-warningCardHeader-128">
                  <span class="material-icons MuiIcon-root" aria-hidden="true">content_copy</span>
                </div><p class="makeStyles-cardCategory-107">Used Space</p>
                <h3 class="makeStyles-cardTitle-109">49/50 <small>GB</small>
                </h3></div><div class="makeStyles-cardFooter-134 makeStyles-cardFooterStats-137">
                <div class="makeStyles-stats-106"><div class="makeStyles-defaultFontStyle-139 makeStyles-dangerText-149">
                  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
                  </svg></div><a href="#pablo">Get more space</a>
                </div></div>
            </div>
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
