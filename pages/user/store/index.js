import React, { useEffect } from "react";
import { useState } from "react";
import LayoutSeller from "../../../components/Layout/LayoutSeller";
import axios from "../../../utils/axios";
import style from "../../../styles/sellerContent.module.css";
import TableInvoice from "../../../components/TableInvoice";

import BoxDashboard from "../../../components/BoxDashboard";

const index = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("api/auth/store").then((res) => {
            setData(res.data);
        });
    }, []);
    const summary = data && data.summary.summary;

    return (
        <LayoutSeller>
            <div className={style.content}>
                <BoxDashboard data={summary} />
                <TableInvoice data={summary && data.summary.invoice} />
            </div>
        </LayoutSeller>
    );
};
export default index;
