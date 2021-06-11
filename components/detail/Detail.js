import { Divider } from "@material-ui/core";
import style from "../../styles/description.module.css";

const detail = () => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>
                Sepatu bagus anti selip mudah dipakai Garansi satu tahun resmi &#128513;
            </h3>
            <p>
                sold 100 &#8226; <span>&#9733;4.59(100 ulasan)</span>
            </p>
            <h2 className={style.price}>Rp5000.000</h2>
            <Divider />
        </div>
    );
};

export default detail;
