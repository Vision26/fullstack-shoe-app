import axios from "axios"
import React, { useEffect, useState } from "react"
const Context = React.createContext()

function ContextProvider(props){
const [APIArr, setAPIArr] = useState([])

const axiosGet = () => {
    axios.get('/shoeapi')
    .then(res => setAPIArr(res.data))
    .catch(err => console.log(err))
}
useEffect(() => {
axiosGet()
}, [])
console.log(APIArr)
    return(
        <Context.Provider value={{APIArr}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }