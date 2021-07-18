import style from "../../styles/detail.module.css";
import Image from "next/image";
import Book from "@material-ui/icons/Book";
import { useDispatch, useSelector } from "react-redux";
import { formCart } from "../../lib/CartUtils";
import { useState } from "react";
import {  srcImage } from "../../utils/url";
import { addBuyNow } from "../../actions/OrderActions";

const Bottom = ({ data, index }) => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.user.is_auth);
	
	const [quantity, setQuantity] = useState(1);

	const varian = data.varian[index];
	const image =
		varian.image instanceof Array ? data.image[0].image : varian.image.image;

	const product = {
		id: varian.id,
		title: data.title,
		varian: varian.name,
		store: data.store,
		thumb: {
			image,
		},
		price: varian.price,
		slug: data.slug,
	};

	return (
		<div className={style.Bottom}>
			<div className={style.title}>
				<img
					src={srcImage(image)}
					max-width="50px"
					height="50px"
					className="img"
				/>
				<h5>{data.title}</h5>
			</div>
			<div className={style.count}>
				<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				<input
					type="number"
					onChange={(e) => setQuantity(e.target.value)}
					value={quantity}
				/>
				<button
					onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
				>
					-
				</button>
			</div>
			<div className={style.price}>
				<p>Total Price:</p>
				<h4>Rp{varian.price * quantity}</h4>
			</div>
			<button
				onClick={() => dispatch(formCart(auth, product, quantity))}
				className={style.add}
			>
				Add To Cart
			</button>
			<button className={style.buy} onClick={() => dispatch(addBuyNow(product))}>Buy Now</button>
			<button className={style.book}>
				<Book />
			</button>
		</div>
	);
};

export default Bottom;
