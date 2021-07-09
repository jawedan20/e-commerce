import Link from "next/link";
import { useSelector } from "react-redux";
import popNotif from "../../styles/popNotif.module.css";
import NotificationItem from "../Notification/NotificationItem";

const PopNotif = () => {
	const { notifications } = useSelector((state) => state.notification);
	return (
		<div className={popNotif.box}>
			<div className={popNotif.head}>
				<h4>Notifications</h4>
			</div>
			<div className={popNotif.body}>
				{notifications ? (
					notifications.map((item, i) => {
						return <NotificationItem key={i} data={item} />;
					})
				) : (
					<h4>ga ado notif do</h4>
				)}
			</div>
			<div className={popNotif.footer}>
				<Link href="/notification">
					<a>See more</a>
				</Link>
			</div>
		</div>
	);
};

export default PopNotif;
