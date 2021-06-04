import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
  updateCartAction,
} from "../actions/Cart";

import { baseUrl } from "../utils/url";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Image
          src={baseUrl(data.thumb.image)}
          width="fit-content"
          height="fit-content"
        />
      </div>
      <div>
        <div>
          <button onClick={() => dispatch(addToCartAction(data))}>add to cart</button>
          <button onClick={() => dispatch(removeFromCartAction(data.id))}>reduce cart</button>
          <button onClick={() => dispatch(updateCartAction(data))}>delete from cart</button>
        </div>
        <h5>{data.title}</h5>
        <h5>{data.price}</h5>
      </div>
    </div>
  );
};

export default Product;
