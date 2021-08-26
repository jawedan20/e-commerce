import Image from "next/image";
import pop from "../../styles/pop.module.css";
import { intToRupiah } from "../../utils/convert";
import { srcImage } from "../../utils/url";

const CartItemPop = ({product,quantity}) => {
  return (
    <>
      <div className={pop.item}>
        <Image src={srcImage(product.thumb[0].image)} width={50} height={50} />
        <div className={pop.title}>
          <h4>{product.title}</h4>
          <span>{product.varian}</span><br/>
        </div>
        <p className={pop.price}>{quantity} x {intToRupiah(product.price)}</p>
      </div>
    </>
  );
};

export default CartItemPop;
