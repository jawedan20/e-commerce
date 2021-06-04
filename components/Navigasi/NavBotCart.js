import Container from "@material-ui/core/Container";
import { countCart } from "../../lib/CartUtils";
import nav from "../../styles/navbotcart.module.css";

const NavBotCart = ({cartList}) => {
  const { cartItemCount, cartTotal } = countCart(cartList)
  return (
    <div className={nav.container}>
      <Container>
        <div className={nav.content}>
          <div className={nav.price}>
              <p>Total</p>
              <p className={nav.Price}>Rp{cartTotal}</p>
          </div>
          <button>Checkout ({cartItemCount})</button>
        </div>
      </Container>
    </div>
  );
};

export default NavBotCart;
