import React, { useState } from 'react';

// @material-ui/core components
import Cardshopitem from "components/Cardshopitem/Cardshopitem.js";
import Tabs from "components/CustomTabs/CustomTabs.js";


const Shop = (props) => {
    const [display, setDisplay] = useState(props.display);
    const {items} = props;

    const toggleItem = () => {
        setDisplay(!display);
    }

    //will replace by categories in shops from API
    const category = [];
    for(const cat in props.items.drink) category.push(cat);

    return (
        <Tabs 
            title={(<b onClick={toggleItem}>{props.name}:</b>)}
            headerColor="info"
            tabs={category.map(cat => {
                return {
                    tabName: cat,
                    tabContent: (<Cardshopitem key={cat} display={display} items={items.drink[cat]} color="info" />)
                }
            })}
        />
    );
}

export default Shop;