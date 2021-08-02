import LayoutUser from "../../components/Layout/LayoutUser";
import Styles from "../../styles/Address.module.css";
import Search from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import LocationList from "../../components/AuthSystem/Location/AdressList";
import From from "../../components/AuthSystem/Location/CreateAdress";

const address = () => {
    const location = useSelector((state) => state.user.location);
    const primeLocation = useSelector((state) => state.user.location_primary);

    return (
        <LayoutUser>
            <div className={Styles.headAddress}>
                <h3>Address List</h3>
                <From />
            </div>
            <div className={Styles.bodyAddress}>
                {location.length > 0 &&
                    location.map((item,i) => {
                        const { id } = item;
                        return <LocationList key={i} data={item} prime={id === (primeLocation && primeLocation.id)} />;
                    })}
            </div>
        </LayoutUser>
    );
};

export default address;
