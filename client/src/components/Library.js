import React, { useState, useContext } from "react"
import { Context } from "../Context"
import LibraryImage from "../childComponents/LibraryImage"
import Footer from "../subComponents/Footer"

function Library(){
const { collectorsArr } = useContext(Context)

    return(
        <div className="library-container">
            <h1>Search</h1>
           {collectorsArr.slice(0, 7).map(collector => <LibraryImage key={collector.name} {...collector}/>)}
           <Footer />
        </div>
    )
}

export default Library