import style from "../../styles/detail.module.css";
import Image from "next/image";
import { baseUrl } from "../../utils/url";
import { useState } from "react";
const PanelImage = ({ data, active }) => {
    const [key, setKey] = useState(0);
    return (
        <div className={style.Image}>
            <Image
                className={style.img}
                src="/sapatu.jpg"
                src={baseUrl(data.image[key].image)}
                width="fit-content"
                height="fit-content"
                layout="responsive"
                quality={50}
            />
            <div className={style.navImg}>
                {data.image.map((img, i) => {
                    return (
                        <img
                            className={style.kind}
                            style={i === key ? active : null}
                            src={baseUrl(img.image)}
                            onClick={() => setKey(i)}
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PanelImage;
