import LayoutUser from "../../components/Layout/LayoutUser";
import Styles from "../../styles/Address.module.css";
import Search from "@material-ui/icons/Search";
import {  useSelector } from "react-redux";
import LocationList from '../../components/AuthSystem/Location/AdressList'

const address = () => {
  const location = useSelector(state => state.user.location)
  const primeLocation = useSelector(state => state.user.location_primary)
  return (
    <LayoutUser>
      <div className={Styles.headAddress}>
        <h3>Address List</h3>
        <button>Add New Address</button>
      </div>
      <div className={Styles.bodyAddress}>
        <div className={Styles.head}>
          <div className={Styles.search}>
            <input />
            <div>
              <Search fontSize="small" />
            </div>
          </div>
        </div>

        {location.length > 0 && (
          location.map(item => {
            const {id} = item

            return <LocationList data={item} prime={id === primeLocation} />
          })
        )}
        
        
      </div>
    </LayoutUser>
  );
};

export default address;
