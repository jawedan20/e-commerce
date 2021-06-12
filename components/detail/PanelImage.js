import style from "../../styles/detail.module.css";
import Image from "next/image";
import { baseUrl } from "../../utils/url";
import { useState } from "react";
const PanelImage = ({ data }) => {
  const [key, setKey] = useState(0);
  return (
    <div className={style.Image}>
      <Image
        className={style.img}
        src={baseUrl(data.image[key].image)}
        width="fit-content"
        height="400px"
      />
      <div className={style.navImg}>
        {data.image.map((img, i) => {
          return (
            <img
              className={style.kind}
              src={baseUrl(img.image)}
              onClick={() => setKey(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PanelImage;
