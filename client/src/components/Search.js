import React, { useState, useContext } from "react"

function Search(){
    const [searchState, setSearchState] = useState({
        name:""
    })

    return(
        <div>
            <form>
                <input 
                type="text"
                name="name"
                value={}
                
                />
            </form>
        </div>
    )
}

export default Search