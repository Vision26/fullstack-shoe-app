import React, { useContext } from "react"
import { Context } from "../Context"
import Images from "../childComponents/HomeImage"
import Footer from "../subComponents/Footer"

function Home(){
const { APIArr } = useContext(Context)

    return(
        <div className="home-container">
         {APIArr.slice(0, 1).map(api => <Images key={api.imgUrl} {...api}/>)}
         <Footer />
        </div>
    )
}

export default Home