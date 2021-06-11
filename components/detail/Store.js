import { Avatar } from "@material-ui/core";
import Location from "@material-ui/icons/LocationOn";
import Add from "@material-ui/icons/Add";
import Forum from "@material-ui/icons/Forum";
import style from "../../styles/detailRight.module.css";

const Store = () => {
    return (
        <div className={style.store}>
            <div className={style.storeDetail}>
                <Avatar />
                <div className={style.storeName}>
                    <h5>StoreName</h5>
                    <Location style={{ fontSize: "16", verticalAlign: "sub" }} />
                    <span>StoreAddress</span>
                </div>
            </div>
            <div className={style.action}>
                <button className={style.follow}>
                    <Add style={{ fontSize: "15", marginRight: "5px" }} /> Follow
                </button>
                <button className={style.chat}>
                    <Forum style={{ fontSize: "15", marginRight: "5px" }} /> Chat
                </button>
            </div>
        </div>
    );
};

export default Store;
