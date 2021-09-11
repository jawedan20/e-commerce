import React from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import style from "../styles/sellerContent.module.css";
import LocalMallIcon from '@material-ui/icons/LocalMall';

const boxDashboard = ({data}) => {
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
