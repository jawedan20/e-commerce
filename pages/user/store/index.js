import React, { useEffect } from 'react'
import { useState } from 'react';
import LayoutSeller from '../../../components/Layout/LayoutSeller';
import axios from '../../../utils/axios';

const index = () => {
    const [data,setData] = useState(null)
    useEffect(() => {
        axios.get("api/auth/store").then(res => {setData(res.data)} )
    }, [])
    const summary = data && data.summary.summary 

    return (
        <LayoutSeller>
            {data && data.summary.invoice.map(item => <p>{item.create_at}</p>)}
            <br />
            <p>total balance {summary && summary.balance}</p>
            <br />
            <p>total salary {summary && summary.salary}</p>
            <br />
            <p>status</p>
            <br />
            {summary && Object.keys(summary.status).map((key) => {
                return <p>{summary.status[key] + " :" + key}  </p>
            })}
        </LayoutSeller>
    )
}
export default index
