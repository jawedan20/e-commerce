import firebase from "./firebase";

export default class firestore {
	static db = firebase.firestore();
	static channels = firebase.firestore().collection("channels");
	static message = firebase.firestore().collection("message");

	static getMessageBychannels = async (user_1, user_2) => {
		let id_channel;
		const channels = await this.channels
			.where("member", "in", [
				[user_1, user_2],
				[user_2, user_1],
			])
			.get();
		if (!channels.docs.length > 0) {
			id_channel = await this.channels.add({ member: [user_1, user_2] });
		} else {
			id_channel = channels.docs[0];
		}
		const message = await this.message
			.where("channels_id", "==", id_channel.id)
			.get();
		let data = [];
		message.docs.forEach((item) => data.push(item.data()));

		return data;
	};
}
