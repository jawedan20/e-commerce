import Link from "next/link";
import Image from "next/image";
import pop from "../../styles/pop.module.css";
import { useSelector } from "react-redux";
import { countCart } from "../../lib/CartUtils";
import CartItemPop from "../Cart/CartItemPop";

const PopCart = () => {
    const CartList = useSelector((state) => state.cart.cartList);
    const { cartItemCount } = countCart(CartList);
    if (CartList.length <= 0) {
        return (
            <div className={pop.empty}>
                <Image src="/Shopping cart_Monochromatic.svg" alt="Picture of the author" width={150} height={150} />
                <h5 className={pop.message}>Oppps!! Your Cart Is Empty</h5>
            </div>
        );
    }
    return (
        <div className={pop.box}>
            <div className={pop.head}>
                <h4>Cart({cartItemCount})</h4>
                <Link href="/cart">
                    <a className={pop.link}>View More</a>
                </Link>
            </div>
            <div className={pop.body}>
                {CartList.map((item, i) => {
                    if (i < 3)
                        return (
                            <CartItemPop key={i} product={item.product} quantity={item.quantity} />
                        );
                })}
            </div>
        </div>
    );
};

export default PopCart;
