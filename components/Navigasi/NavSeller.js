import style from "../../styles/Seller.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";

const NavSeller = () => {
    return (
        <div className={style.nav}>
            <div className={style.navLeft}>
                <MenuIcon />
                <h2>Dashboard</h2>
            </div>
            <div className={style.navRight}>
                <Avatar style={{width:"28px", height:"28px"}}/>
            </div>
        </div>
    );
};

export default NavSeller;
