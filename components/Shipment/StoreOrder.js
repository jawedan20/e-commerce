import { useState } from "react";

import { srcImage } from "../../utils/url";
import SelectOngkir from "../../components/Shipment/OngkirSelect";
import axios from "../../utils/axios";

const StoreOrder = ({ data, store,address,setData }) => {
	const [data_ongkir, setData_ongkir] = useState([]);
   
    
	const checkOngkir = async () => {
		if (!address) return;
		if (!data.length > 0) return;
		const origin = data[0].product.store.location.city_id;
		const destination = address.city_id;

		axios
			.post("api/auth/cek-ongkir/", { origin, destination })
			.then((res) => {
				setData_ongkir(res.data.rajaongkir.results[0].costs);
			})
			.catch((err) => console.log(err.request));
	};

	return (
		<>
			<p>{store}</p>
			{data.length > 0 &&
				data.map((item, i) => {
					return (
						<>
							<p>{item.product.title}</p>
							<img
								src={srcImage(item.product.thumb.image)}
								alt="image"
								width={50}
								height={50}
							/>
							<p>{item.quantity}</p>
						</>
					);
				})}
			{data_ongkir.length > 0 ? (
				<SelectOngkir dataset={data_ongkir} setData={setData} />
			) : (
				<button onClick={() => checkOngkir()}>Cek Ongkir</button>
			)}
		</>
	);
};

export default StoreOrder;
