import style from "../../styles/Seller.module.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Avatar, Divider } from "@material-ui/core";
const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.headSidebar}>
                <h1>
                    LOGO<span>Seller</span>
                </h1>
            </div>
            <div className={style.profileSide}>
                <Avatar />
                <div className={style.detail}>
                    <h4>nama toko</h4>
                    <h6>pemilik toko</h6>
                </div>
            </div>
            <Divider variant="middle" style={{marginTop:"13px"}} />
            <div className={style.income}>
                <p>Balance <span>12</span></p>
                <p>Salary <span>12</span></p>
            </div>
            <Divider variant="middle" style={{marginBottom:"13px"}} />
            <div className={style.navSide}>
                <DashboardIcon />
                <span>Dashboard</span>
            </div>
            <div className={style.navSide}>
                <DashboardIcon />
                <span>Product</span>
            </div>
            <div className={style.navSide}>
                <DashboardIcon />
                <span>Order</span>
            </div>
        </div>
    );
};

export default Sidebar;
