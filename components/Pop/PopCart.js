import Link from "next/link";
import Image from "next/image";
import pop from "../../styles/pop.module.css";
import { useSelector } from "react-redux";
import { countCart } from "../../lib/CartUtils";
import CartItemPop from "../Cart/CartItemPop";

const PopCart = () => {
  const CartList = useSelector(state => state.cart.cartList)
  const { cartItemCount } = countCart(CartList)
  
  return (
    <div className={pop.box}>
      <div className={pop.head}>
        <h4>Cart({cartItemCount})</h4>
        <Link href="/cart">
          <a className={pop.link}>View More</a>
        </Link>
      </div>
      <div className={pop.body}>
        {CartList.length > 0 && CartList.map((item,i) => {
          if(i < 3) return <CartItemPop key={i} product={item.product} quantity={item.quantity} />
        })}
      </div>
    </div>
  );
};

export default PopCart;
