import Image from "next/image";
import Store from "@material-ui/icons/Store";
import Cart from ".././styles/cart.module.css";
import NavBot from "../components/Navigasi/NavBotCart";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";

const cart = () => {
  const CartList = useSelector(state => state.cart.cartList)
  console.log(CartList)
  return (
    <div className={Cart.Container}>
      <div className={Cart.all}>
        <input type="checkbox" className={Cart.check} />
        <p>Select All Product</p>
      </div>
      <div className={Cart.store}>
        <div className={Cart.head}>
          <input type="checkbox" className={Cart.check} />
          <Store style={{ marginLeft: "20px", marginRight: "5px" }} />
          <p>storeName</p>
        </div>
        {CartList.length > 0 && CartList.map((item,i) => {
          return <CartItem key={i} product={item.product} quantity={item.quantity} />
        })}
      </div>  
      <NavBot cartList={CartList} />
    </div>
  );
};

export default cart;
