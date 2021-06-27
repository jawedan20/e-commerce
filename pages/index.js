import Category from "../components/Category";
import Categories from "../components/Categories";
import Product from "../components/Product";
import BottomNav from "../components/navigasi/BottomNav";
import axios from "../utils/axios";
import style from "../styles/layout.module.css";

export default function Home({ data }) {
    return (
        <>
            <div className={style.container}>
                {data.length > 0 &&
                    data.map((item, i) => {
                        return <Product key={i} data={item} image="/a.jpeg" />;
                    })}
            </div>

            <BottomNav />
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await axios.get("api/product/");
        if (!res.data) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                data: res.data.results,
            }, // will be passed to the page component as props
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
