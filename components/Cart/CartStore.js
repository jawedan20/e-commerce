import Store from "@material-ui/icons/Store";
import CartItem from "./CartItem";
import Cart from "../../styles/cart.module.css";

const CartStore = ({ store, cartList, selectItem, onCheck }) => {
  const checkAllCheck = () => {
    const idCart = cartList.map((e) => e.product.id);
    return idCart.every(id => selectItem.includes(id));

  };
  return (
    <div className={Cart.store}>
      <div className={Cart.head}>
        <input
          type="checkbox"
          id={"store-check"}
          value={store}
          className={Cart.check}
          onChange={(e) => onCheck(e)}
          checked={checkAllCheck()}
        />
        <Store style={{ marginLeft: "20px", marginRight: "5px" }} />
        <p>{store}</p>
      </div>
      {cartList.length > 0 &&
        cartList.map((item, i) => {
          return (
            <CartItem
              key={i}
              product={item.product}
              quantity={item.quantity}
              selectItem={selectItem}
              onCheck={onCheck}
            />
          );
        })}
    </div>
  );
};

export default CartStore;
