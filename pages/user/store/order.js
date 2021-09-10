import React, { useEffect, useState } from 'react'
import LayoutSeller from '../../../components/Layout/LayoutSeller'
import OrderInvoice from '../../../components/Order/OrderInvoice'
import axios from '../../../utils/axios'

const order = () => {
    const [data,setData] = useState(null)
    useEffect(() => {
        axios.get("api/auth/store/order/").then(res => {console.log(res.data);setData(res.data.data)} )
    }, [])
    const pagination = data?.count

    return (
        <LayoutSeller>
            {data && data.result.map((item,i) => {
                return <OrderInvoice data={item} key={i} />
            })}
            <br />
        </LayoutSeller>)
}

export default order
