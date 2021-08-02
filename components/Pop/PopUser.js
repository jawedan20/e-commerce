import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import popUser from "../../styles/popUser.module.css";
import Settings from "@material-ui/icons/Settings";
import Power from "@material-ui/icons/PowerSettingsNew";
import List from "@material-ui/icons/ListAlt";
import Store from "@material-ui/icons/Store";
import { logout } from "../../actions/user";
import { connect } from "react-redux";
import { srcImage } from "../../utils/url";

const PopUser = ({ auth, logout }) => {
  return (
    <div className={popUser.box}>
      <div className={popUser.header}>
        <Link href="/user/profile">
          <div className={popUser.head}>
            <Avatar src={srcImage(auth.profile)} style={{ marginRight: "5px" }} />
            <h3>{auth.username}</h3>
          </div>
        </Link>
        <div className={popUser.head}>
          <Avatar style={{ marginRight: "5px" }}>
            <Store />
          </Avatar>
          {auth.store ? (
            <Link href={"/user/store"}>
              <h4>{auth.store.name}</h4>
            </Link>
          ) : (
            <Link href={"/user/store/create"}>
              <h4> create store</h4>
            </Link>
          )}
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
        <div className={popUser.navigasi} onClick={() => logout()}>
          <Power className={popUser.icon} />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default connect(null, { logout })(PopUser);
