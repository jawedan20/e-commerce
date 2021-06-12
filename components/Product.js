import Image from "next/image";
import style from "../styles/product.module.css";
import { baseUrl } from "../utils/url";
import Link from "next/link"

const Product = ({ data, image }) => {
    return (
        <Link href={data.store + "/" +data.slug}>
            <div className={style.container}>
                <Image
                    src={baseUrl(data.thumb.image)}
                    width="fit-content"
                    height="fit-content"
                    className={style.image}
                />
                <div className={style.content}>
                    <h5>{data.title}</h5>
                    <h4>Rp{data.price}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Product;
