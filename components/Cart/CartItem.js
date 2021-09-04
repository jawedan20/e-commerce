import Image from "next/image";
import Cart from "../../styles/cart.module.css";

import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reduceQuantity, removeFromCart } from "../../lib/CartUtils";
import { bookMarkProduct } from "../../actions/user";
import { srcImage } from "../../utils/url";
import { useRouter } from "next/dist/client/router";
import { intToRupiah } from "../../utils/convert";

const CartItem = ({ product, quantity, selectItem, onCheck }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.is_auth);
  console.log(product.thumb)
  return (
    <>
      <div className={Cart.pro}>
        <div className={Cart.cs}>
          <input
            type="checkbox"
            id={"itemCheck"}
            className={Cart.check}
            checked={selectItem.includes(product.id)}
            onChange={(e) => onCheck(e)}
            value={product.id}
          />
          <Image
            width="80px"
            height="80px"
            src={srcImage(Array.isArray(product.thumb) ? product.thumb[0].image : product.thumb.image)}
          />
        </div>
        <div className={Cart.body}>
          <div className={Cart.title}>
            <h3>{product.title}</h3>
            <span>{product.varian}</span>
            <h4>{intToRupiah(product.price)}</h4>
          </div>
          <div className={Cart.right}>
            <div className={Cart.action}>
              <a
                onClick={() =>
                  auth
                    ? dispatch(bookMarkProduct(product.id))
                    : router.push("/login")
                }
              >
                <BookmarkIcon />
              </a>
              <a onClick={() => dispatch(removeFromCart(auth, product.id))}>
                <DeleteIcon />
              </a>
            </div>
            <div className={Cart.count}>
              <span
                onClick={() => dispatch(reduceQuantity(auth, product.id))}
                style={{ borderRight: "1px solid lightgray" }}
              >
                -
              </span>
              <h4>{quantity}</h4>
              <span
                onClick={() => dispatch(addToCart(auth, product))}
                style={{ borderLeft: "1px solid lightgray" }}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
