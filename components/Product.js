import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction, updateCartAction } from "../actions/Cart";
import style from "../styles/product.module.css";
import { baseUrl } from "../utils/url";
import Link from "next/link"

const Product = ({ data, image }) => {
    const dispatch = useDispatch();
    return (
        <Link href={"/detail/" + data.id}>
            <div className={style.container}>
                <Image
                    src={image}
                    // src={baseUrl(data.thumb.image)}
                    width="fit-content"
                    height="fit-content"
                    className={style.image}
                />
                <div className={style.content}>
                    <h5>{data.title}</h5>
                    <h4>Rp{data.price}</h4>
                </div>
                {/* <div>
                  <div>
                    <button onClick={() => dispatch(addToCartAction(data))}>add to cart</button>
                    <button onClick={() => dispatch(removeFromCartAction(data.id))}>reduce cart</button>
                    <button onClick={() => dispatch(updateCartAction(data))}>delete from cart</button>
                  </div>
                  <h5>{data.title}</h5>
                  <h5> </h5>
                </div> */}
            </div>
        </Link>
    );
};

export default Product;
