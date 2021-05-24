import Image from "next/image";
import Store from "@material-ui/icons/Store";
import Cart from ".././styles/cart.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import NavBot from "../components/Navigasi/NavBotCart";

const cart = () => {
  return (
    <div className={Cart.Container}>
      <div className={Cart.all}>
        <input type="checkbox" className={Cart.check} />
        <p>Select All Product</p>
      </div>
      <div className={Cart.store}>
        <div className={Cart.head}>
          <input type="checkbox" className={Cart.check} />
          <Store style={{ marginLeft: "20px", marginRight: "5px" }} />
          <p>storeName</p>
        </div>
        <div className={Cart.pro}>
          <div>
            <input type="checkbox" className={Cart.check} />
            <Image width="100px" height="100px" src="/a.jpeg" />
          </div>
          <div className={Cart.body}>
            <div className={Cart.title}>
              <p>Baju baru Allhmadulillah</p>
              <span>
                hijau, XL <i>remain 5</i>
              </span>
              <h5>Rp500.000</h5>
            </div>
            <div className={Cart.right}>
              <div className={Cart.action}>
                <a>
                  <BookmarkIcon />
                </a>
                <a>
                  <DeleteIcon />
                </a>
              </div>
              <div className={Cart.count}>
                <span style={{ borderRight: "1px solid lightgray" }}>-</span>
                <h4>21</h4>
                <span style={{ borderLeft: "1px solid lightgray" }}>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <NavBot />
    </div>
  );
};

export default cart;
