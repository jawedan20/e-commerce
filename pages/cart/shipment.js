import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { sortCartWithStore, countCart, formCart } from "../../lib/CartUtils";
import Testing from "../../components/AuthSystem/Location/CreateAdress";

import StoreOrder from "../../components/Shipment/StoreOrder";
import axios from "../../utils/axios";
import { RemoveShipment } from "../../actions/OrderActions";
import { intToRupiah } from "../../utils/convert";

const shipment = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const order = useSelector((state) => state.order.shipments);

	const cartList = useSelector((state) => state.cart.cartList);
	const orderItem = cartList.filter((item) => order.includes(item.product.id));
	const orderList = sortCartWithStore(orderItem); // sort data
	const address = useSelector((state) => state.user.location_primary);

	const { cartItemCount, cartTotal } = countCart(orderItem);
	const [data, setData] = useState({
		order_item: orderItem.map((item) => ({
			quantity: item.quantity,
			product: item.product.id,
		})),
		location: address ? address.id : null,
		ongkir: 0,
	});

	const onSubmit = () => {
		axios
			.post("api/order/", JSON.stringify(data))
			.then((res) => {
				dispatch(
					formCart(
						true,
						orderItem.map((item) => item.product.id)
					)
				);
				dispatch(RemoveShipment());
				router.push(`/user/order/${res.data.order_key}`);
			})
			.catch((err) => console.log(err.request));
	};

	return (
		<>
			<h1>shipmant</h1>
			{Object.keys(orderList).map((key) => {
				return (
					<StoreOrder
						setData={setData}
						key={key}
						data={orderList[key]}
						store={key}
						address={address}
					/>
				);
			})}
			<p>
				total product({cartItemCount}) : {intToRupiah(cartTotal)}
			</p>
			<p>total ongkir : {intToRupiah(data.ongkir)}</p>
			<p>total : {intToRupiah(cartTotal + data.ongkir)}</p>
			<button onClick={() => onSubmit()}>Order</button>
		</>
	);
};

export default shipment;
