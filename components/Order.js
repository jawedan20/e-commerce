import Order from "../styles/Order.module.css";
import Search from "@material-ui/icons/Search";
import ActiveLink from "./ActiveLink/ActiveSubLink";

const all = ({children}) => {
  return (
    <div>
      <div className={Order.head}>
        <h3>Order List</h3>
      </div>
      <div className={Order.subHead}>
        <div className={Order.Navlink}>
          <ActiveLink href="/user/order/all">All</ActiveLink>
          <ActiveLink href="/user/order/ongoing">Ongoing</ActiveLink>
          <ActiveLink href="/user/order/success">Success</ActiveLink>
          <ActiveLink href="/user/order/failed">Failed </ActiveLink>
        </div>
        <div className={Order.search}>
          <Search fontSize="small" />
          <input placeholder="Search Order" />
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default all;
