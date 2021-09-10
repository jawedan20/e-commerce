import { Container } from "@material-ui/core";
import style from "../../styles/Seller.module.css";
import NavSeller from "../Navigasi/NavSeller";
import Sidebar from "../Navigasi/Sidebar";

const LayoutSeller = ({ children }) => {
    return (
        <div className={style.sellerPage}>
            <Sidebar />
            <div>
                <NavSeller />
                <Container>
                    <div className={style.children}>{children}</div>
                </Container>
            </div>
        </div>
    );
};

export default LayoutSeller;
