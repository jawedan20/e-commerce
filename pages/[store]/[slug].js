import Image from "next/image";
import style from "../../styles/detail.module.css";
import { Breadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import axios from "../../utils/axios";
import Detail from "../../components/detail/Detail";


export default function detail({ product }) {
  return (

      <div className={style.container}>
        <Detail data={product} />
      </div>

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
