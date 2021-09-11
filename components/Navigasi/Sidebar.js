import style from "../../styles/Seller.module.css";
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import { Avatar, Divider } from "@material-ui/core";
import ActiveLink from "../utils/ActiveLink/ActiveLink";
import ShopIcon from '@material-ui/icons/ShopTwoOutlined';
const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.headSidebar}>
                <h1>
                    LOGO&nbsp;<span>Seller</span>
                </h1>
            </div>
            <div className={style.profileSide}>
                <Avatar />
                <div className={style.detail}>
                    <h4>nama toko</h4>
                    <p>pemilik toko</p>
                </div>
            </div>
            <Divider variant="middle" style={{ marginTop: "13px", marginBottom:"13px" }} />
            <ActiveLink href="/user/store" type="side">
                    <DashboardIcon />
                    <span>Dashboard</span>
            </ActiveLink>
            <ActiveLink href="/user/store/product" type="side">
                <ShopIcon />
                <span>Product</span>
            </ActiveLink>
            <ActiveLink href="/user/store/order" type="side">
                <DashboardIcon />
                <span>Order</span>
            </ActiveLink>
        </div>
    );
};

export default Sidebar;
