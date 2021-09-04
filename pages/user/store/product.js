import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'


const product = () => {
    const [data,setData] = useState(null)
    useEffect(() => {
        axios.get("api/auth/store/product").then(res => {console.log(res.data);setData(res.data.data)} )
    }, [])
   

    return (
        <>
            {data && data.result.map(item => <p>{item.id}</p>)}
           
        </>)
}

export default product
