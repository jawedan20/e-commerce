import style from "../../styles/detail.module.css";
import Image from "next/link"

const PanelImage = () => {
    return (
        <div className={style.Image}>
            <Image className={style.img} src="/a.jpeg" width="fit-content" height="400px" />
            <div className={style.navImg}>
                <Image
                    className={style.kind}
                    src="/a.jpeg"
                    width="fit-content"
                    height="fit-content"
                />
                <Image
                    className={style.kind}
                    src="/download.jpg"
                    width="fit-content"
                    height="fit-content"
                />
                <Image
                    className={style.kind}
                    src="/sapatu.jpg"
                    width="fit-content"
                    height="fit-content"
                />
            </div>
        </div>
    );
};

export default PanelImage;
