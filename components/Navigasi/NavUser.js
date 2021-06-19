import Avatar from "@material-ui/core/Avatar";
import user from "../../styles/user.module.css";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Notifications from "@material-ui/icons/Notifications";
import ActiveLink from "../utils/ActiveLink/ActiveLink";
import Link from "next/link";
import { useSelector } from "react-redux";
import { srcImage } from "../../utils/url";

const NavUser = () => {
  const mystyle = {
    width: "25px",
    height: "25px",
    color: "white",
    marginRight: "10px",
  };
  const { username, profile } = useSelector((state) => state.user.detail_user);
  return (
    <div className={user.nav}>
      <div className={user.headNav}>
        <Avatar src={srcImage(profile)} style={{ marginRight: "10px" }} />
        <div>
          <h4>{username}</h4>
          <a href="/user/profile">Edit Profile</a>
        </div>
      </div>
      <div className={user.bodyNav}>
        <div>
          <div className={user.link}>
            <Avatar style={mystyle} />
            <h5>My Account</h5>
          </div>
          <div id="sublink" className={user.sublink}>
            <ActiveLink href="/user/profile" type="link">
              <p className={user.active}>Personal Profile</p>
            </ActiveLink>
            <ActiveLink href="/user/address" type="link">
              <p className={user.active}>Addres List</p>
            </ActiveLink>
            <ActiveLink href="/user/bank" type="link">
              <p className={user.active}>Bank Account</p>
            </ActiveLink>
          </div>
        </div>
        <div className={user.link}>
          <Avatar style={mystyle}>
            <ListAltIcon fontSize="small" />
          </Avatar>
          <Link href="/user/order/">
            <h5>My Order</h5>
          </Link>
        </div>
        <div className={user.link}>
          <Avatar style={mystyle}>
            <Notifications fontSize="small" />
          </Avatar>
          <h5>Notifications</h5>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
