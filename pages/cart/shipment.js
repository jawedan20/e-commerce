import React from 'react'
import { useSelector } from 'react-redux'
import { sortCartWithStore } from '../../lib/CartUtils'
import Testing from '../../components/AuthSystem/Location/CreateAdress'
const shipment = () => {
    const order = useSelector(state => state.order.shipments)
    const cartList = useSelector(state => state.cart.cartList)  
    const orderList = sortCartWithStore(cartList.filter(item => order.includes(item.product.id))) // sort data
     
    return (
        <>
            <h1>shipmant</h1>
            <Testing />
            
          
        </>
    )
}

export default shipment
