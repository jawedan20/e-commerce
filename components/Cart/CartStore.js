import Store from "@material-ui/icons/Store";
import CartItem from "./CartItem";
import Cart from "../../styles/cart.module.css";

const CartStore = ({ store, cartList }) => {
  return (
      <>
    <div className={Cart.store}>
      <div className={Cart.head}>
        <input type="checkbox" className={Cart.check} />
        <Store style={{ marginLeft: "20px", marginRight: "5px" }} />
        <p>{store}</p>
      </div>
      {cartList.length > 0 && cartList.map((item,i) => {
        return <CartItem key={i} product={item.product} quantity={item.quantity} />
      })}
    </div> 
    </> 
  );
};

export default CartStore;
