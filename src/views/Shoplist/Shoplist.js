import React from "react";
// core components
import Shop from "components/Shop/Shop.js";

// will replace by shops from API
const shops = ['JC BAKERY', 'CAFE AMAZON', 'TOLE JOUSE', 'APPLE DONUT', 'PIZZA COMPANY'];

export default function Shoplist() {
  return (
    <div>
      {
        shops.map(shop => {
          return (
            <Shop key={shop} display='d-none' name={shop} />
          );
        })
      }
    </div>
  );
}