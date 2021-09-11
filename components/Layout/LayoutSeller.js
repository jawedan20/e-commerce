import { Container } from "@material-ui/core";
import style from "../../styles/Seller.module.css";
import NavSeller from "../Navigasi/NavSeller";
import Sidebar from "../Navigasi/Sidebar";

const LayoutSeller = ({ children }) => {
    return (
        <div className={style.sellerPage}>
            <Sidebar />
            <div className={style.children}>
                <NavSeller />
                {children}
            </div>
        </div>
    );
};

export default LayoutSeller;
