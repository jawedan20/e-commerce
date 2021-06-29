import style from "../../styles/transaction.module.css";
import Image from "next/image";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { srcImage } from "../../utils/url";

const OrderItem = ({data}) => {
    const matches = useMediaQuery("(max-width:800px)");
    const {id,product,quantity} = data
    return (
        <div className={style.body}>
        <Image
          width={!matches ? "60px" : "40px"}
          height={matches ? "40px" : "60px"}
          src={srcImage(product.thumb.image)}
        />
        <div className={style.detail}>
          <h4>{product.title}</h4>
          <h5>{quantity} X Rp {product.price}</h5>
        </div>
        <div className={style.total}>
          <p>Total Price</p>
          <h4>Rp {product.price * quantity}</h4>
        </div>
      </div>
    )
}

export default OrderItem
