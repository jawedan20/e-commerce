import NavUser from "../Navigasi/NavUser";
import layout from "../../styles/layout.module.css"


const LayoutUser = ({ children }) => {
  
  
  return (
    <div className={layout.components}>
      <NavUser />
      <div className={layout.content}>{children}</div>
    </div>
  );
};

export default LayoutUser;
