import style from "../styles/transaction.module.css";
import OrderItem from "./Order/OrderItem";

const Transaction = ({ data }) => {
	const { create_at, order_item, order_key, order_status } = data;

	return (
		<div className={style.container}>
			<div className={style.head}>
				<b>{create_at}</b>
				<span>{order_status}</span>
				<p>{order_key}</p>
			</div>
			{order_item.map((item, i) => {
				return <OrderItem key={i} data={item} />;
			})}
			<div className={style.end}>
				<h5>Detail Transaction</h5>
				<button>Buy Again</button>
			</div>
		</div>
	);
};

export default Transaction;
