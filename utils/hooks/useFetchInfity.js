import { useEffect, useState } from "react";
import axios from "../axios";

export default function FecthData(url,page) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(url+`page=${page}`)
			.then((res) => {
				setLoading(false);
				setHasMore(res.data.next !== null);
				setData((prev) => {
					const data = JSON.stringify(prev) === "{}" ? [] : prev;
					return [...data, ...res.data.results];
				});
			})
			.catch((e) => setHasMore(false));
	}, [page]);

	return [data, hasMore, loading];
}

export const useObsever = (node) => {
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
				if (entries[0].isIntersecting && !next) {
					setPage((prevPageNumber) => prevPageNumber + 1);
				}
			});
			// kalo ada node inisialisasi dengan observer

			if (node) observer.current.observe(node);
		},
		[loading, next]
	);
}
