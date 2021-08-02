import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Grouped({ options, disable, setData }) {
	const [value, setValue] = useState(null);
	const [open, setOpen] = useState(disable);

	return (
		<Autocomplete
			id="combo-box-demo"
			open={!open}
			disabled={!disable}
			options={options}
			onClose={() => setOpen(true)}
			onOpen={() => setOpen(false)}
			value={value}
			onChange={(e, newValue) => {
				setValue(newValue);
				setData((prev) => ({
					...prev,
					postal_code:Number(newValue)
				}));
			}}
			getOptionLabel={(option) => (option ? String(option) : "")}
			getOptionSelected={(option, value) => option === value}
			options={options}
			style={{ width: 150 }}
			renderInput={(params) => (
				<TextField {...params} label="Postal Code" variant="outlined" />
			)}
		/>
	);
}
