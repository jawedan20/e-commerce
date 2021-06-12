import Image from "next/image";
import NavBot from "../components/Navigasi/NavBotCart";
import { useSelector } from "react-redux";
import { ListItemIcon } from "@material-ui/core";
import CartStore from "../components/Cart/CartStore";
import style from "../styles/cart.module.css";
import Store from "@material-ui/icons/Store";
import CartItem from "../components/Cart/CartItem";

const CartRawToSort = (cart) => {
  const storeList = new Object();
  cart.length > 0 &&
    cart.map((item) => {
      const store = item.product.store;
      if (store in storeList) {
        storeList[store] = [...storeList[store], item];
      } else {
        storeList[store] = [item];
      }
    });
  return storeList;
};

const cart = () => {
  const CartList = useSelector((state) => state.cart.cartList);
  const data = CartRawToSort(CartList);

  return (
    <div className={style.Container}>
      <div className={style.all}>
        <input type="checkbox" className={style.check} />
        <p>Select All Product</p>
      </div>
        {Object.keys(data).map((key) => {
          return <CartStore key={key} store={key} cartList={data[key]} />;
        })}
       
      {/* <NavBot cartList={CartList} /> */}
    </div>
  );
};

export default cart;
