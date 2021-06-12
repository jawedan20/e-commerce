import Image from "next/image";
import Bottom from "../../../components/detail/Bottom";
import Store from "../../../components/detail/Store";
import Detail from "../../../components/detail/Detail";
import style from "../../../styles/detail.module.css";
import { Breadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Delivery from "../../../components/detail/Delivery";
import PanelImage from "../../../components/detail/PanelImage";
import axios from "../../../utils/axios";

export default function detail({ product }) {
    console.log(product);
    return (
        <>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                style={{ fontSize: "0.8rem", marginBottom: "20px" }}
            >
                <a color="inherit" href="/">
                    Men's Fashion
                </a>
                <a href="/getting-started/installation/">Shoes</a>
                <a color="textPrimary">Casual Shoes</a>
            </Breadcrumbs>
            <div className={style.container}>
                <PanelImage />
                <Detail />
                <div>
                    <Store />
                    <Delivery />
                </div>
            </div>

            <Bottom />
        </>
    );
}
export async function getStaticPaths() {
    const res = await axios.get("api/product");
    const products = res.data.results;

    const paths = products.map((product) => ({
        params: { store: product.store, slug: product.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`api/product/${params.store}/${params.slug}`);
    const product = res.data;

    return { props: { product } };
}
