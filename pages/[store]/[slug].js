import axios from "../../utils/axios";
import Detail from "../../components/detail/Detail";

export default function detail({ product }) {
  return <Detail data={product} />;
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
