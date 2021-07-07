import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendLocation, setPrimaryLocation } from "../../../actions/user";
import axios from "../../../utils/axios";
import useFormData from "../../../utils/hooks/useFormData";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import style from "../../../styles/CreateAddress.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { sendAlert } from "../../../actions/AlertActions";

export default function CreateAdress() {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const [primary, SetPrimary] = useState(false);
	const user = useSelector((state) => state.user.detail_user.id);
	const { data, handleChange } = useFormData({
		name: "",
		phone: "",
		city: "",
		address: "",
		other: "",
		name_location: "",
		user,
	});

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const handleCheck = (e) => SetPrimary(e.target.checked);

	const handleSubmit = () => {
		let formData = data;

		axios
			.post("api/auth/location/", JSON.stringify(formData))
			.then((res) => {
				dispatch(appendLocation(res.data));
				dispatch(sendAlert("success Add Address", 1));
				if (primary) {
					dispatch(setPrimaryLocation(res.data.id));
				}
				handleClose();
			})
			.catch((err) => dispatch(sendAlert(err.request.response, 3)));
	};
	return (
		<div>
			<button type="button" onClick={handleOpen}>
				Add New Address
			</button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={style.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
			>
				<Fade in={open}>
					<form className={style.paper}>
						<h2>Add New Address</h2>
						<TextField
							label="Address Label"
							style={{ marginBottom: "20px" }}
							id="name_location"
							variant="outlined"
							size="small"
							onChange={(e) => handleChange(e)}
						/>
						<div className={style.name}>
							<TextField
								label="Recipient's Name"
								style={{ marginRight: "15px", marginBottom: "20px" }}
								id="name"
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
							/>
							<TextField
								label="Phone Number"
								style={{ marginBottom: "20px" }}
								id="phone"
								variant="outlined"
								size="small"
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<TextField
							label="City and Other"
							style={{ marginBottom: "20px" }}
							id="city"
							variant="outlined"
							size="small"
							onChange={(e) => handleChange(e)}
						/>
						<TextField
							label="alamat"
							style={{ marginBottom: "20px" }}
							id="address"
							variant="outlined"
							size="small"
							onChange={(e) => handleChange(e)}
							label="alamat penerima"
						/>
						<TextField
							style={{ marginBottom: "20px" }}
							id="other"
							variant="outlined"
							size="small"
							onChange={(e) => handleChange(e)}
							label="patokan opsional penerima"
						/>
						{/* yang bawah enak pake opsion kayak rumah / kantor */}
						<div className={style.check}>
							<input
								id="set_primary"
								type="checkbox"
								checked={primary}
								onChange={(e) => handleCheck(e)}
							/>
							<label htmlFor="set_primary">set as primary address</label>
						</div>
						<div className={style.button}>
							<Button
								style={{ marginTop: "15px", width: "150px" }}
								variant="contained"
								color="primary"
								onClick={() => handleSubmit()}
							>
								Add
							</Button>
							<Button
								style={{
									marginTop: "15px",
									marginLeft: "15px",
									width: "150px",
								}}
								variant="outlined"
								color="primary"
								onClick={handleClose}
							>
								Cancel
							</Button>
						</div>
					</form>
				</Fade>
			</Modal>
		</div>
	);
}
