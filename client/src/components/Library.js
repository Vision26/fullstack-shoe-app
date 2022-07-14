import React, { useState, useContext } from "react"
import { Context } from "../Context"
import ShopImage from "../childComponents/ShopImage"
import Footer from "../subComponents/Footer"

function Shop(){
const { collectorsArr } = useContext(Context)

    return(
        <div className="library-container">
           {collectorsArr.slice(0, 7).map(collector => <ShopImage key={collector.name} {...collector}/>)}
           <Footer />
        </div>
    )
}

export default Shop