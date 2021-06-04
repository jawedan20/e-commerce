import Image from "next/image";
import pop from "../../styles/pop.module.css";

const CartItemPop = ({product,quantity}) => {
  return (
    <>
      <div className={pop.item}>
        <Image src="/download.jpg" width={50} height={50} />
        <div className={pop.title}>
          <h4>{product.title}</h4>
          <span>jumlah( {quantity} barang )</span>
        </div>
        <p className={pop.price}>Rp{product.price}</p>
      </div>
    </>
  );
};

export default CartItemPop;
