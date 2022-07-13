import React from "react"

function ShopImage(props){
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

export default ShopImage