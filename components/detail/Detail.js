import { Divider } from "@material-ui/core";
import { useState } from "react";
import style from "../../styles/description.module.css";

const detail = () => {
    const [size, setSize] = useState("-");
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setSize(value);
    };
    return (
        <div className={style.container}>
            <h3 className={style.title}>
                Sepatu bagus anti selip mudah dipakai Garansi satu tahun resmi &#128513;
            </h3>
            <p>
                sold 100 &#8226; <span>&#9733;4.59(100 ulasan)</span>
            </p>
            <h2 className={style.price}>Rp5000.000</h2>
            <Divider style={{ marginBottom: "25px", marginTop: "20px" }} />
            <h4>
                SIZE: <span>{size}</span>
            </h4>
            <div className={style.size}>
                <label htmlFor="8">
                    8
                    <input
                        name="size"
                        id="8"
                        type="radio"
                        value="8"
                        onChange={handleChange}
                        hidden
                    />
                </label>
                <label htmlFor="9">
                    9
                    <input
                        name="size"
                        id="9"
                        type="radio"
                        value="9"
                        onChange={handleChange}
                        hidden
                    />
                </label>
                <label htmlFor="10">
                    10
                    <input
                        name="size"
                        id="10"
                        type="radio"
                        value="10"
                        onChange={handleChange}
                        hidden
                    />
                </label>
            </div>
            <Divider style={{ marginBottom: "25px", marginTop: "20px" }} />
        </div>
    );
};

export default detail;
