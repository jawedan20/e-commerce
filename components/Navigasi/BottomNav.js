import React from "react";
import Shop from "@material-ui/icons/Shop";
import Badge from "@material-ui/core/Badge";
import nav from "../../styles/navbotcart.module.css";
import Home from "@material-ui/icons/Home";
import Menu from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const BottomNav = () => {
  return (
    <div className={nav.container}>
      <div className={nav.content}>
        <div>
          <Home />
          <p>Cart</p>
        </div>
        <div>
          <Menu />
          <p>Cart</p>
        </div>
        <div>
          <Badge>
            <Shop />
          </Badge>
          <p>Cart</p>
        </div>
        <div>
          <Shop />
          <p>Cart</p>
        </div>
        <div>
          <AccountCircleIcon />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
