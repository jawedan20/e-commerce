import LayoutUser from "../../components/Layout/LayoutUser";
import bank from "../../styles/bank.module.css";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Avatar from "@material-ui/core/Avatar";

const address = () => {
  return (
    <LayoutUser>
      <div className={bank.headBank}>
        <h3>Bank Account</h3>
      </div>
      <div className={bank.body}>
        <div className={bank.head}>
          <p>* The maximum number of active Bank Accounts is 3 (three).</p>
          <button>Add Bank Account</button>
        </div>
        <div className={bank.bank}>
          <div className={bank.bankdiv}>
            <Avatar>
              <AccountBalance />
            </Avatar>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ fontSize: "0.8rem" }}>Bank Central Asia</p>
              <h4 style={{ margin: "2px 0" }}>432423423</h4>
              <h4>
                <span style={{ fontWeight: "400" }}>a.n </span>muhammdadasd
              </h4>
            </div>
          </div>
          <button>Remove</button>
        </div>
        <div className={bank.bank}>
          <div className={bank.bankdiv}>
            <Avatar>
              <AccountBalance />
            </Avatar>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ fontSize: "0.8rem" }}>Bank Central Asia</p>
              <h4 style={{ margin: "2px 0" }}>432423423</h4>
              <h4>
                <span style={{ fontWeight: "400" }}>a.n </span>muhammdadasd
              </h4>
            </div>
          </div>
          <button>Remove</button>
        </div>
        <div className={bank.bank}>
          <div className={bank.bankdiv}>
            <Avatar>
              <AccountBalance />
            </Avatar>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ fontSize: "0.8rem" }}>Bank Central Asia</p>
              <h4 style={{ margin: "2px 0" }}>432423423</h4>
              <h4>
                <span style={{ fontWeight: "400" }}>a.n </span>muhammdadasd
              </h4>
            </div>
          </div>
          <button>Remove</button>
        </div>
      </div>
    </LayoutUser>
  );
};

export default address;
