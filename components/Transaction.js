import style from "../styles/transaction.module.css";
import Image from "next/image";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Transaction = () => {
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <div className={style.container}>
      <div className={style.head}>
        <b>20 juli 2021</b>
        <span>Status</span>
        <p>COde/Invoice/y928huw</p>
      </div>
      <div className={style.body}>
        <Image
          width={!matches ? "60px" : "40px"}
          height={matches ? "40px" : "60px"}
          src="/a.jpeg"
        />
        <div className={style.detail}>
          <h4>Baju baru Allhmadulillah</h4>
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
