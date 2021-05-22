import LayoutUser from "../../../components/LayoutUser";
import Order from "../../../components/Order";
import Transaction from "../../../components/Transaction"

const all = () => {
  return (
    <div>
      <LayoutUser>
        <Order>
          <Transaction />
          <Transaction />
          <Transaction />
        </Order>
      </LayoutUser>
    </div>
  );
};

export default all;
