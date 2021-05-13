import Avatar from "@material-ui/core/Avatar";
import Notifications from "@material-ui/icons/Notifications";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import styleNavbar from "../styles/Navbar.module.css";
import Badge from "@material-ui/core/Badge";
import Link from "next/link";
import React, { useState } from "react";
import PopCart from "./Popcart";
import PopNotif from "./PopNotif";
import PopUser from "./PopUser";
import Sms from "@material-ui/icons/Sms";

export const Navbar = () => {
  const [user, setUser] = useState("asdsa");

  return (
    <div>
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
            <div id={styleNavbar.cart} className={styleNavbar.link}>
              <Link href="/cart">
                <Badge badgeContent={5} color="secondary">
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
                <div id={styleNavbar.cart} className={styleNavbar.link}>
                  <Badge badgeContent={5} color="secondary">
                    <Notifications fontSize="small" />
                  </Badge>
                  <div className={styleNavbar.NotifPop}>
                    <PopNotif />
                  </div>
                </div>
                <div className={styleNavbar.link}>
                  <Badge badgeContent={0}>
                    <Sms fontSize="small" />
                  </Badge>
                </div>
                <div id={styleNavbar.cart} className={styleNavbar.link_user}>
                  <Avatar
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "10px",
                    }}
                  />
                  <h3 style={{ fontWeight: "400", color: "#66666" }}>
                    Username
                  </h3>
                  <div className={styleNavbar.NotifPop}>
                    <PopUser />
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
