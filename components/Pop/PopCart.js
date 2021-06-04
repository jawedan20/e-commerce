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
          if(i < 3) return <CartItemPop product={item.product} quantity={item.quantity} />
        })}
        
        <div className={pop.item}>
          <Image src="/download.jpg" width={50} height={50} />
          <div className={pop.title}>
            <h4>sepatu ori vans</h4>
            <span>jumlah( 1 barang )</span>
          </div>
          <p className={pop.price}>Rp1000.000</p>
        </div>
      </div>
    </div>
  );
};

export default PopCart;
