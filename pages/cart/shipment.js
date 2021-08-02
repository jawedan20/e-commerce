import React from "react";
import { useSelector } from "react-redux";
import { sortCartWithStore } from "../../lib/CartUtils";
import Testing from "../../components/AuthSystem/Location/CreateAdress";
import { useEffect } from "react";

import axios from "../../utils/axios";


const shipment = () => {
	const order = useSelector((state) => state.order.shipments);
	const alamat = useSelector((state) => state.user.location_primary);
	const cartList = useSelector((state) => state.cart.cartList);
	const orderList = sortCartWithStore(
		cartList.filter((item) => order.includes(item.product.id))
	); // sort data
	const origin = 412;
	const destination = 430;
	// useEffect(() => {
	// 	axios
	// 		.post("api/auth/cek-ongkir/", { origin, destination })
	// 		.then((res) => console.log(res.data));
	// }, []);

	return (
		<>
			<h1>shipmant</h1>
			<Testing />
		</>
	);
};

export default shipment;
