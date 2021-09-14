import { useState } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import style from "../styles/sellerContent.module.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Menu, MenuItem } from "@material-ui/core";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const boxDashboard = ({ data }) => {
    const d = new Date();
    let n = months[d.getMonth()];
    const [anchorEl, setAnchorEl] = useState(null);
    const [month, setMonth] = useState(n);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChange = (e) => {
        n = months[e.target.value - 1];
        setMonth(n);
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className={style.container}>
                <div className={style.boxMoney}>
                    <div className={style.boxIcon}>
                        <AttachMoneyIcon fontSize="large" />
                    </div>
                    <div>
                        <h5>Balance</h5>
                        <h1>Rp{data && data.balance}</h1>
                    </div>
                </div>
                <div className={style.boxMoney}>
                    <div className={style.boxIcon}>
                        <LocalMallIcon fontSize="large" />
                    </div>
                    <div>
                        <h5>Salary</h5>
                        <h1>{data && data.salary}</h1>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.box1}>
                    <div>
                        <div>
                            <p className={style.dateOrder}>
                                Order Statistics -{" "}
                                <span onClick={handleClick}>{month} &#9660;</span>
                            </p>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <div className={style.menu}>
                                    <p className={style.menuHead}>Select Month</p>
                                    {months.map((item, key) => (
                                        <MenuItem
                                            value={key + 1}
                                            key={key}
                                            dense
                                            onClick={handleChange}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
                                </div>
                            </Menu>
                        </div>
                        <h5>Total Orders</h5>
                        <h1>{data && data.total_orders}</h1>
                    </div>
                    <AllInboxIcon fontSize="large" />
                </div>
                <div className={style.box}>
                    <h5>Payment</h5>
                    <h1>{data && data.status.payment}</h1>
                </div>
                <div className={style.box}>
                    <h5>Ongoing</h5>
                    <h1>0</h1>
                </div>
                <div className={style.box}>
                    <h5>Finish</h5>
                    <h1>0</h1>
                </div>
            </div>
        </>
    );
};

export default boxDashboard;
