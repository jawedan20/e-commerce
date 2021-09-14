import { NoSsr, Paper, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LayoutSeller from "../../../components/Layout/LayoutSeller";
import OrderInvoice from "../../../components/Order/OrderInvoice";
import axios from "../../../utils/axios";
import style from "../../../styles/sellerContent.module.css";

const order = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("api/auth/store/order/").then((res) => {
            console.log(res.data);
            setData(res.data.data);
        });
    }, []);
    const pagination = data?.count;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <LayoutSeller>
            <div className={style.paper}>
                <NoSsr>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="All Order" />
                        <Tab label="Ongoing" />
                        <Tab label="Finish" />
                    </Tabs>
                </NoSsr>
                {data &&
                    data.result.map((item, i) => {
                        return <OrderInvoice data={item} key={i} />;
                    })}
            </div>
        </LayoutSeller>
    );
};

export default order;
