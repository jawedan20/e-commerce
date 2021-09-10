import style from "../../styles/Seller.module.css";
import MenuIcon from "@material-ui/icons/Menu";

const NavSeller = () => {
    return (
        <div className={style.nav}>
            <div className={style.navRight}>
                <MenuIcon />
                <h2>Dashboard</h2>
            </div>
        </div>
    );
};

export default NavSeller;
