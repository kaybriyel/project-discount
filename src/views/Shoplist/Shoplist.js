import React, { useState, useEffect } from "react";
// core components
import Shop from "components/Shop/Shop.js";
import {apiUrl} from 'variables/general.js';

// will replace by shops from API

export default function Shoplist() {
  const [shops, setShop] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(apiUrl + 'shops');
      res.ok && setShop(await res.json());
    })();
  }, [shops.length]
  );

  return (
    <div>
      {
        shops.map(shop => {
          return (
            <Shop key={shop.id} display={false} name={shop.name} items={shop.items} />
          );
        })
      }
    </div>
  );
}