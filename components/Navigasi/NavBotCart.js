import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addShipment } from "../../actions/OrderActions";
import { countCart } from "../../lib/CartUtils";
import nav from "../../styles/navbotcart.module.css";
import { intToRupiah } from "../../utils/convert";

const NavBotCart = ({ cartList }) => {
  const dispatch = useDispatch()
  const router = useRouter() 
  
	const { cartItemCount, cartTotal } =
		cartList.length > 0
			? countCart(cartList)
			: { cartItemCount: 0, cartTotal: 0 };
  const checkOutShipment = () => {
    dispatch(addShipment(cartList))
    router.push('/cart/shipment')
  }
	return (
		<div className={nav.container}>
			<Container>
				<div className={nav.content}>
					<div className={nav.price}>
						<p>Total</p>
						<p className={nav.Price}>{intToRupiah(cartTotal)}</p>
					</div>
					<button onClick={() =>checkOutShipment() }>Checkout ({cartItemCount})</button>
				</div>
			</Container>
		</div>
	);
};

export default NavBotCart;
