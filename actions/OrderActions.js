import axios from "../utils/axios";
import * as types from "./action_types/action_type_order";

export const fecthDataOrder =
	(endpoint = null) =>
	(dispatch) => {
		let url = endpoint
			? `api/order/${endpoint.slice(endpoint.length - 7)}`
			: `api/order/?page=1`;
		dispatch({
			type: types.LOADING_ORDER,
			payload: true,
		});
		axios
			.get(url)
			.then((res) => {
				const { next, results } = res.data;
				dispatch({
					type: types.LOADING_ORDER,
					payload: false,
				});
				dispatch({
					type: types.FETCH_ORDER_DATA,
					payload: { next, results },
				});
			})
			.catch((err) => {
				dispatch({
					type: types.LOADING_ORDER,
					payload: false,
				});
				console.log(err.request);
			});
	};
