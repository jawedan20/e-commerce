import { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function AlertComponent(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = () => {
	const { id, message, typeToast } = useSelector((state) => state.alert);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (id) {
			setOpen(true);
		}
	}, [id]);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	let alertMessage;

	if (typeToast === 1) {
		alertMessage = (
			<AlertComponent severity="success">{message}</AlertComponent>
		);
	} else if (typeToast === 2) {
		alertMessage = (
			<AlertComponent severity="warning">{message}</AlertComponent>
		);
	} else if (typeToast === 3) {
		alertMessage = (
			<AlertComponent severity="error">{message}</AlertComponent>
		);
	}
	return (
		<>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				{alertMessage}
			</Snackbar>
		</>
	);
};

export default Alert;