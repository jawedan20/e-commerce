import LayoutUser from "../../../components/Layout/LayoutUser";
import Order from "../../../components/Order"
import Transaction from "../../../components/Transaction"

const all = () => {
  return (
    <div>
      <LayoutUser>
        <Order>
          <Transaction/>
        </Order>
      </LayoutUser>
    </div>
  );
};

export default all;
