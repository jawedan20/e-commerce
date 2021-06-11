import style from "../../styles/detail.module.css";
import Image from "next/image";
import Book from "@material-ui/icons/Book";

const Bottom = () => {
    return (
        <div className={style.Bottom}>
            <div className={style.title}>
                <img src="/sapatu.jpg" max-width="50px" height="50px" className="img" />
                <h5>Sepatu bagus anti selip mudah dipakai Garansi satu tahun resmi &#128513;</h5>
            </div>
            <div className={style.count}>
                <button>+</button>
                <input type="number" />
                <button>-</button>
            </div>
            <div className={style.price}>
                <p>Total Price:</p>
                <h4>Rp500.000</h4>
            </div>
            <button className={style.add}>Add To Cart</button>
            <button className={style.buy}>Buy Now</button>
            <button className={style.book}>
                <Book />
            </button>
        </div>
    );
};

export default Bottom;
