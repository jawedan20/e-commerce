import Image from "next/image";
import Bottom from "../components/detail/Bottom";
import Store from "../components/detail/Store";
import Detail from "../components/detail/Detail";
import style from "../styles/detail.module.css";
import { Breadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Delivery from "../components/detail/Delivery";

const detail = () => {
    return (
        <>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                style={{ fontSize: "0.8rem", marginBottom: "20px" }}
            >
                <a color="inherit" href="/">
                    Men's Fashion
                </a>
                <a href="/getting-started/installation/">Shoes</a>
                <a color="textPrimary">Casual Shoes</a>
            </Breadcrumbs>
            <div className={style.container}>
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
                <Detail />
                <div>
                    <Store />
                    <Delivery />
                </div>
            </div>
            
            <Bottom />
        </>
    );
};

export default detail;
