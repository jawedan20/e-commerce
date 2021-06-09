import Image from "next/image";
import Bottom from "../components/detail/Bottom";
import Detail from "../components/detail/Detail";
import style from "../styles/detail.module.css";
import { Breadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const detail = () => {
    return (
        <>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                style={{ fontSize: "0.8rem" , marginBottom:"20px" }}
            >
                <a color="inherit" href="/">
                    Men's Fashion
                </a>
                <a href="/getting-started/installation/">Shoes</a>
                <a color="textPrimary">Casual Shoes</a>
            </Breadcrumbs>
            <div className={style.container}>
                <div className={style.Image}>
                    <Image src="/sapatu.jpg" width="fit-content" height="500px" />
                    <div className={style.navImg}>
                        <Image
                            src="/a.jpeg"
                            width="fit-content"
                            height="fit-content"
                        />
                        <Image src="/download.jpg" width="fit-content" height="fit-content" />
                        <Image src="/sapatu.jpg" width="fit-content" height="fit-content" />
                    </div>
                </div>
                <Detail />
                <Bottom />
            </div>
        </>
    );
};

export default detail;
