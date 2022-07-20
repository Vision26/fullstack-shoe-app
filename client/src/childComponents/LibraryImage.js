import React from "react"

function LibraryImage(props){
const { imgUrl, name, shoeType, inventors, yearCreated, description} = props

    return(
        <div className="shop-container">
<img src={imgUrl}/>
<ul>
    <li>{name}</li>
    <li>{inventors}</li>
    <li>{shoeType}</li>
    <li>{yearCreated}</li>
   <li>{description}</li>
</ul>
        </div>
    )
}

export default LibraryImage