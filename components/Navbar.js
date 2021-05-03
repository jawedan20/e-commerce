import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Notifications from "@material-ui/icons/Notifications";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import styleNavbar from "../styles/Navbar.module.css";
import Badge from "@material-ui/core/Badge";
import Link from "next/link";
import { useState } from "react";

export const Navbar = (props) => {
  const [user, setUser] = useState("");
  return (
    <div className={styleNavbar.navbar}>
      <div className={styleNavbar.container}>
        <Link href="/">
          <a className={styleNavbar.brand}>LOGO</a>
        </Link>
        <div className={styleNavbar.nav_search}>
          <input placeholder="What you want?" type="text" />
          <button>
            <Search
              fontSize="small"
              color="action"
              className={styleNavbar.search_icon}
            />
          </button>
        </div>
        <div className={styleNavbar.nav_link}>
          <IconButton aria-label="cart">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCart fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="secondary">
              <Notifications fontSize="small" />
            </Badge>
          </IconButton>
          {!user ? (
            <div className={styleNavbar.guest}>
              <button className={styleNavbar.login}>Login</button>
              <button className={styleNavbar.register}>Register</button>
            </div>
          ) : (
            <div className={styleNavbar.link_user}>
              <Avatar
                style={{ width: "25px", height: "25px", marginRight: "5px" }}
              />
              Username
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
