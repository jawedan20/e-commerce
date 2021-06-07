
import Image from "next/image";
import Cart from "../../styles/cart.module.css";

import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useDispatch } from "react-redux";
import { addToCartAction,removeFromCartAction,reduceQuantityCartAction,addToCartAuthAction } from "../../actions/Cart";
const CartItem = ({product,quantity}) => {
    const dispatch = useDispatch()
    return (
        <>
        <div className={Cart.pro}>
          <div>
            <input type="checkbox" className={Cart.check} />
            <Image width="100px" height="100px" src="/a.jpeg" />
          </div>
          <div className={Cart.body}>
            <div className={Cart.title}>
              <p>{product.title}</p>
              <span>
                {product.varian}
              </span>
              <h5>Rp{product.price}</h5>
            </div>
            <div className={Cart.right}>
              <div className={Cart.action}>
                <a>
                  <BookmarkIcon />
                </a>
                <a onClick={() => dispatch(removeFromCartAction(product.id))}>
                  <DeleteIcon />
                </a>
              </div>
              <div className={Cart.count}>
                <span onClick={() => dispatch(reduceQuantityCartAction(product.id))} style={{ borderRight: "1px solid lightgray" }}>-</span>
                <h4>{quantity}</h4>
                <span onClick={() => dispatch(addToCartAction(product))} style={{ borderLeft: "1px solid lightgray" }}>+</span>
              </div>
            </div>
          </div>
        </div>
            
        </>
    )
}

export default CartItem
