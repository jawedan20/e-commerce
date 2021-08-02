import axios from "axios";

export function CekOngkir(origin, destination) {
	return new Promise((resolve, reject) => {
        let data = new FormData();
        data.append("origin", origin + "");
        data.append("destination", destination + "");
        data.append("weight", "100");
        data.append("courier", "jne");
		const config = {
			method: "post",
			url: "https://api.rajaongkir.com/starter/cost",
			headers: {
				key: "597f52e05a00c744d13ff6957a8ee156",
			},
			data: data,
		};

		axios(config)
			.then((res) => {
				resolve(JSON.parse(res.data));
			})
			.catch((err) => {
				console.log(err.request);
				reject(err.request);
			});
	});
}
