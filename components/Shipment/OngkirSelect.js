
import InputLabel from  "@material-ui/core/InputLabel"
import MenuItem from  "@material-ui/core/MenuItem"
import Select from  "@material-ui/core/Select"
import { useState } from "react";

const OngkirSelect = ({ dataset, setData}) => {
    const [ongkir,setOngkir] = useState(null)
	return (
		<div>
			<InputLabel id="ongkir_select">Select Ongkir</InputLabel>
			<Select
				labelId="ongkir_select"
				id="ongkir_select"
				value={ongkir}
				onChange={(e) => {
					setData((prev) => ({
						...prev,
						ongkir: prev.ongkir + e.target.value,
					}));
					setOngkir(e.target.value);
				}}
			>
				{dataset.length > 0 &&
					dataset.map((item, i) => {
						const cost = item.cost[0];
						return (
							<MenuItem id="ongkir_select" value={cost.value}>
								<p>
									{item.description} <span>{cost.etd} hari </span>
								</p>
								<br></br>
								<p>Rp {cost.value}</p>
							</MenuItem>
						);
					})}
			</Select>
		</div>
	);
};

export default OngkirSelect;
