import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios'
import LayoutSeller from '../../../components/Layout/LayoutSeller'

const product = () => {
    const [data,setData] = useState(null)
    useEffect(() => {
        axios.get("api/auth/store/product").then(res => {console.log(res.data);setData(res.data.data)} )
    }, [])
   

    return (
        <LayoutSeller>
            {data && data.result.map(item => <p>{item.id}</p>)}
        </LayoutSeller>)
}

export default product
