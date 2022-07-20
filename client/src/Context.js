import axios from "axios"
import React, { useEffect, useState } from "react"
const Context = React.createContext()

function ContextProvider(props){
const [APIArr, setAPIArr] = useState([])
const [collectorsArr, setCollectorsArr] = useState([])
const [signUpArr, setSignUp] = useState([])

const axiosGetShoeApi = () => {
    axios.get(`/shoeapi`)
    .then(res => setAPIArr(res.data))
    .catch(err => console.log(err))
}
useEffect(() => {
axiosGetShoeApi()
}, [])
// console.log(APIArr)

const axiosGetCollectors = () => {
    axios.get('/collectors')
    .then(res => setCollectorsArr(res.data))
    .catch(err => console.log(err))
}

console.log(collectorsArr)
useEffect(() => {
axiosGetCollectors()
}, [])

//put - collectors

const axiosSignUp = () => {
    axios.get('/signup')
    .then(res => setSignUp(res.data))
}

useEffect(() => {
    axiosSignUp()
}, [])

const addPost = newPost => {
    axios.post('/signup', newPost)
    .then(res => setSignUp(prev => [...prev, res.data]))
    .catch(err => console.log(err))
}
const editSignUp = (update, updateId) => {
    axios.put(`/signup/${updateId}`, update)
    .then(res => setSignUp(prev => prev.map(prevs => prevs._id !== updateId ? prevs : res.data)))
    .catch(err => console.log(err))
}

//delete - collectors
const delSignUp = Id => {
    axios.delete(`/signup/${Id}`)
    .then(res => setSignUp(prev => prev.filter(prevs => {
        return prevs._id !== Id
    })))
    .catch(err => console.log(err))
}
console.log(signUpArr)
    return(
        <Context.Provider value={{APIArr, collectorsArr, addPost, signUpArr, editSignUp, delSignUp}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }