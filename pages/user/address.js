import LayoutUser from "../../components/layoutUser";
import Address from "../../styles/user.module.css";
const address = () => {
  return (
    <LayoutUser>
      <div className={Address.headcontent}>
        <h3>Personal Information</h3>
      </div>
      <div></div>
    </LayoutUser>
  );
};

export default address;
