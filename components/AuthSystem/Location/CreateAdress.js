import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendLocation } from "../../../actions/user";
import axios from "../../../utils/axios";
import useFormData from "../../../utils/hooks/useFormData";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function CreateAdress() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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

    const handleCheck = (e) => SetPrimary(e.target.checked);

    const handleSubmit = () => {
        let formData = data;

        axios
            .post("api/auth/location/", JSON.stringify(formData))
            .then((res) => {
                dispatch(appendLocation(res.data));
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Add New Address
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={open}>
                    <form className={classes.paper}>
                            <input
                                id="name"
                                onChange={(e) => handleChange(e)}
                                placeholder="nama penerima..."
                            />
                            <input
                                id="phone"
                                onChange={(e) => handleChange(e)}
                                placeholder="kontak penerima"
                            />
                            <input
                                id="city"
                                onChange={(e) => handleChange(e)}
                                placeholder="provinsi dll penerima..."
                            />
                            <input
                                id="address"
                                onChange={(e) => handleChange(e)}
                                placeholder="alamat penerima..."
                            />
                            <input
                                id="other"
                                onChange={(e) => handleChange(e)}
                                placeholder="patokan opsional penerima..."
                            />
                            {/* yang bawah enak pake opsion kayak rumah / kantor */}
                            <input
                                id="name_location"
                                onChange={(e) => handleChange(e)}
                                placeholder="nama penerima..."
                            />
                            <input
                                id="set_primary"
                                type="check"
                                checked={SetPrimary}
                                onChange={(e) => handleCheck(e)}
                                placeholder="nama penerima..."
                            />
                            <button onClick={() => handleSubmit()}>
                                submit
                            </button>
                    </form>
                </Fade>
            </Modal>
        </div>
    );
}
