import Avatar from "@material-ui/core/Avatar";
import popUser from "../styles/popUser.module.css";

const PopUser = () => {
  return (
    <div className={popUser.box}>
      <div className={popUser.head}>
        <Avatar />
      </div>
    </div>
  );
};

export default PopUser;
