import React from "react";
import Shop from "@material-ui/icons/Shop";
import ActiveLink from "../ActiveLink/ActiveLink";
import nav from "../../styles/navbotcart.module.css";
import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const BottomNav = () => {
  const matches = useMediaQuery('(min-width:800px)');

  return (
    <div hidden={matches}>
      <div className={nav.container}>
        <div className={nav.contentBot}>
          <div className={nav.nav}>
            <ActiveLink href="/" type="bottom">
              <Home />
              <p>Home</p>
            </ActiveLink>
          </div>
          <div className={nav.nav}>
            <ActiveLink href="/category" type="bottom">
              <Menu />
              <p>Category</p>
            </ActiveLink>
          </div>
          <div className={nav.nav}>
            <ActiveLink href="/cart" type="bottom">
              <Shop />
              <p>Cart</p>
            </ActiveLink>
          </div>
          <div className={nav.nav}>
            <ActiveLink href="/user" type="bottom">
              <AccountCircleIcon />
              <p>Account</p>
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
