import Link from "next/link";
import popNotif from "../styles/popNotif.module.css";

const PopNotif = () => {
  return (
    <div className={popNotif.box}>
      <div className={popNotif.head}>
        <h4>Notifications</h4>
      </div>
      <div className={popNotif.body}>
        <h5>lorem ipsum dolor sit amet</h5>
      </div>
      <div className={popNotif.footer}>
        <Link href="#">
          <a>See more</a>
        </Link>
      </div>
    </div>
  );
};

export default PopNotif;
