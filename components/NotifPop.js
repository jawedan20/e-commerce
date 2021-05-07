import Link from "next/link";
import Image from "next/image";
import pop from "../styles/pop.module.css";

const NotifPop = () => {
  return (
    <div className={pop.box}>
      <div className={pop.head}>
        <h4>Cart(5)</h4>
        <Link href="/">
          <a className={pop.link}>View More</a>
        </Link>
      </div>
      <div className={pop.body}>
        <div className={pop.item}>
          <Image src="/download.jpg" width={50} height={50} />
          <div className={pop.title}>
            <h4>sepatu ori vans</h4>
            <span>jumlah( 1 barang )</span>
          </div>
          <p className={pop.price}>Rp1000.000</p>
        </div>
        <div className={pop.item}>
          <Image src="/download.jpg" width={50} height={50} />
          <div className={pop.title}>
            <h4>sepatu ori vans</h4>
            <span>jumlah( 1 barang )</span>
          </div>
          <p className={pop.price}>Rp1000.000</p>
        </div>
      </div>
    </div>
  );
};

export default NotifPop;
