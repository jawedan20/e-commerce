import Avatar from "@material-ui/core/Avatar";
import { useState } from "react";
import popUser from "../styles/popUser.module.css";
import Settings from "@material-ui/icons/Settings";
import Power from "@material-ui/icons/PowerSettingsNew";
import List from "@material-ui/icons/ListAlt";
import Store from "@material-ui/icons/Store";

const PopUser = () => {
  const [store, setStore] = useState("");
  return (
    <div className={popUser.box}>
      <div className={popUser.header}>
        <div className={popUser.head}>
          <Avatar style={{ marginRight: "5px" }} />
          <h3>username</h3>
        </div>
        <div className={popUser.head}>
          <Avatar style={{ marginRight: "5px" }}>
            <Store />
          </Avatar>
          <h4>StoreName</h4>
        </div>
      </div>
      <div className={popUser.body}>
        <div className={popUser.navigasi}>
          <List className={popUser.icon} />
          My Order
        </div>
        <div className={popUser.navigasi}>
          <Settings className={popUser.icon} />
          Setting
        </div>
        <div className={popUser.navigasi}>
          <Power className={popUser.icon} />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default PopUser;
