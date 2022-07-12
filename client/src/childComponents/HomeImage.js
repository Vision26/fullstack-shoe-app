import React from "react"

function Images(props){
    const { imgUrl } = props
    return(
        <div className="images-container">
            <img className="home-img-intro" src={imgUrl}/>
            <div className="images-text-centered">TO DEFY THE UNHIDDEN IN SEARCH OF THE UNSEEN.</div>
            <div className="images-text-centered-sub">| DRIPPY | SHOE | COLLECTIBLE |</div>
        </div>
    )
}

export default Images