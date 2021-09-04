
const OrderInvoice = ({data}) => {
    const {order_key,create_at,customer,order_status} = data
    return (
        <>
          <p>{order_status}</p><br />
          <p>{customer}</p><br />
          <p>{order_key}</p><br />
          <p>{create_at}</p><br />
        </>
    )
}

export default OrderInvoice
