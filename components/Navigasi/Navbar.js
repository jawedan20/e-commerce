import Avatar from "@material-ui/core/Avatar";
import Notifications from "@material-ui/icons/Notifications";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import styleNavbar from "../../styles/Navbar.module.css";
import Badge from "@material-ui/core/Badge";
import Link from "next/link";
import PopCart from "../Pop/PopCart";
import PopNotif from "../Pop/PopNotif";
import PopUser from "../Pop/PopUser";
import Sms from "@material-ui/icons/Sms";
import PopSearch from "../Pop/PopSearch";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { baseUrl, srcImage } from "../../utils/url";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Navbar = () => {
  const matches = useMediaQuery('(min-width:700px)');
  const router = useRouter();
  const user = useSelector((state) => state.user.is_auth);
  const auth = useSelector((state) => state.user.detail_user);
  const style = {
    background: matches  ? "white" : "none", 
    boxShadow: matches  ? "0 2px 4px 0 rgba(14, 13, 13, 0.2)" : "none"
  };
 
  return (
    <div
      hidden={
        router.asPath === "/login" || router.asPath === "/register" || router.asPath.includes("/store")
          ? true
          : false
      }
    >
  
      <div className={styleNavbar.navbar} style={style}>
        <div className={styleNavbar.container}>
          <Link href="/">
            <a className={styleNavbar.brand}>LOGO</a>
          </Link>
          <div className={styleNavbar.fat}>
            <div className={styleNavbar.nav_search}>
              <input placeholder="What you want?" type="text" />
              <button>
                <Search
                  fontSize="small"
                  color="action"
                  style={{ marginRight: "5px" }}
                />
              </button>
            </div>
            <div className={styleNavbar.PopSearch}>
              <PopSearch />
            </div>
          </div>
          <div className={styleNavbar.nav_link}>
            <div id={styleNavbar.cart} className={styleNavbar.link}>
              <Link href="/cart">
                <Badge badgeContent={0} color="secondary" overlap="circle">
                  <ShoppingCart fontSize="small" />
                </Badge>
              </Link>
              <div className={styleNavbar.NotifPop}>
                <PopCart />
              </div>
            </div>
            {!user ? (
              <div className={styleNavbar.guest}>
                <Link href="/login">
                  <button className={styleNavbar.login}>Login</button>
                </Link>
                <Link href="/register">
                  <button className={styleNavbar.register}>Register</button>
                </Link>
              </div>
            ) : (
              <div className={styleNavbar.nav_link}>
                <div id={styleNavbar.cart} className={styleNavbar.notif}>
                  <Badge badgeContent={0} color="secondary" overlap="circle">
                    <Notifications fontSize="small" />
                  </Badge>
                  <div className={styleNavbar.NotifPop}>
                    <PopNotif />
                  </div>
                </div>
                <div className={styleNavbar.link}>
                  <Badge badgeContent={0} overlap="circle">
                    <Sms fontSize="small" />
                  </Badge>
                </div>
                <div id={styleNavbar.cart} className={styleNavbar.link_user}>
                  <Avatar
                    src={srcImage(auth.profile)}
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "10px",
                    }}
                  />
                  <h3 style={{ fontWeight: "400", color: "#66666" }}>
                    {auth.username}
                  </h3>
                  <div className={styleNavbar.NotifPop}>
                    <PopUser auth={auth} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar