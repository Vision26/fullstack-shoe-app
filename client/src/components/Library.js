import React, { useState, useContext } from "react"
import { Context } from "../Context"
import ShopImage from "../childComponents/ShopImage"

function Shop(){
const { collectorsArr } = useContext(Context)

    return(
        <div>
           {collectorsArr.slice(0, 7).map(collector => <ShopImage key={collector.name} {...collector}/>)}
        </div>
    )
}

export default Shop