import { useCallback, useRef, useState } from "react";
import LayoutUser from "../../../components/Layout/LayoutUser";
import Order from "../../../components/Order";
import Transaction from "../../../components/Transaction";
import useFecthData from "../../../utils/hooks/useFetchInfity";

const all = () => {
	const [page, setPage] = useState(1);
	const [data, next, loading] = useFecthData(
		`api/order/?search=${"cancel"}&`,
		page
	);

	const observer = useRef(null);
	const lastOrder = useCallback(
		(node) => {
			// loading tidak di exe
			if (loading) return;
			// kalau udh pernah ada yang terakhir disconnect
			if (observer.current) observer.current.disconnect();
			// bikin baru observer baru
			observer.current = new IntersectionObserver((entries) => {
				// kalau ada observer terlihat maka fecth baru
				if (entries[0].isIntersecting && next) {
					setPage((prevPageNumber) => prevPageNumber + 1);
				}
			});
			// kalo ada node inisialisasi dengan observer

			if (node) observer.current.observe(node);
		},
		[loading, next]
	);
	return (
		<div>
			<LayoutUser>
				<Order>
					{data.length > 0 &&
						data.map((item, i) => {
							if (data.length === i + 1) {
								return (
									<div ref={lastOrder}>
										<Transaction key={i} data={item} />
									</div>
								);
							} else {
								return (
									<div>
										<Transaction key={i} data={item} />
									</div>
								);
							}
						})}
				</Order>
			</LayoutUser>
		</div>
	);
};

export default all;
