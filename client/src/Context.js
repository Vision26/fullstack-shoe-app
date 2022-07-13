import axios from "axios"
import React, { useEffect, useState } from "react"
const Context = React.createContext()

function ContextProvider(props){
const [APIArr, setAPIArr] = useState([])
const [collectorsArr, setCollectorsArr] = useState([])

const axiosGetShoeApi = () => {
    axios.get(`/shoeapi`)
    .then(res => setAPIArr(res.data))
    .catch(err => console.log(err))
}
useEffect(() => {
axiosGetShoeApi()
}, [])
console.log(APIArr)

const axiosGetCollectors = () => {
    axios.get('/collectors')
    .then(res => setCollectorsArr(res.data))
    .catch(err => console.log(err))
}

useEffect(() => {
axiosGetCollectors()
}, [])

    return(
        <Context.Provider value={{APIArr, collectorsArr}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }