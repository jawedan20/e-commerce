import Style from "../styles/Order.module.css";
import Search from "@material-ui/icons/Search";
import ActiveLink from "./utils/ActiveLink/ActiveLink";

const all = ({children}) => {
  console.log(children)
  return (
    <div>
      <div className={Style.head}>
        <h3>Order List</h3>
      </div>
      <div className={Style.subHead}>
        <div className={Style.Navlink}>
          <ActiveLink href="/user/order" type="subLink" >All</ActiveLink>
          <ActiveLink href="/user/order/ongoing" type="subLink" >Ongoing</ActiveLink>
          <ActiveLink href="/user/order/success" type="subLink" >Success</ActiveLink>
          <ActiveLink href="/user/order/failed" type="subLink" >Failed </ActiveLink>
        </div>
        <div className={Style.search}>
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
