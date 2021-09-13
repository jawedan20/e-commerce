import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import LayoutSeller from "../../../components/Layout/LayoutSeller";
import TableProduct from "../../../components/TableProduct";
import style from "../../../styles/sellerContent.module.css";
import { Divider } from "@material-ui/core";

const product = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("api/auth/store/product").then((res) => {
            console.log(res.data);
            setData(res.data.data.result);
        });
    }, []);

    return (
        <LayoutSeller>
            <div className={style.paper}>
                <div className={style.head}>
                    <h3>List Product</h3>
                    <button>Add Product</button>
                </div>
                <Divider />
                <TableProduct data={data} />
            </div>
        </LayoutSeller>
    );
};

export default product;
