import style from "../styles/transaction.module.css";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <b>20 juli 2021</b>
        <span>Status</span>
        <p>COde/Invoice/y928huw</p>
      </div>
      <div className={style.body}>
        <Image width="60px" height="60px" src="/a.jpeg" />
        <div className={style.detail}>
          <h4>Baju baru Allhmadulillah</h4>
          <span>
            hijau, XL <i>remain 5</i>
          </span>
          <h5>1 X Rp500.000</h5>
        </div>
        <div className={style.total}>
          <p>Total Price</p>
          <h4>Rp 500.000</h4>
        </div>
      </div>
      <div className={style.end}>
        <h5>Detail Transaction</h5>
        <button>Buy Again</button>
      </div>
    </div>
  );
};

export default Transaction;
