import Styles from "../../../styles/Address.module.css";
import { useDispatch } from "react-redux";
import { setPrimaryLocation, deleteLocation } from "../../../actions/user";

const Location = ({ data, prime }) => {
    const dispatch = useDispatch();

    const { id, name_location, city, name, other, phone, address } = data;
    if (prime) {
        return (
            <div className={Styles.list}>
                <div>
                    <h5>
                        {name_location} <span>Primary</span>
                    </h5>
                    <h4 className={Styles.name}>{name}</h4>
                    <p>{phone}</p>
                    <p>{city}</p>
                    <p>{address}</p>
                    <p>{other}</p>
                    <div className={Styles.action}>
                        <p>Edit Address</p>
                        <p className={Styles.delete} onClick={() => dispatch(deleteLocation(id))}>
                            Delete
                        </p>
                    </div>
                </div>
                <button className={Styles.primary}>Set as Primary</button>
            </div>
        );
    } else {
        return (
            <div style={{ background: "none", border: "none" }} className={Styles.list}>
                <div>
                    <h5>{name_location}</h5>
                    <h4>{name}</h4>
                    <p>{phone}</p>
                    <p>{city}</p>
                    <p>{address}</p>
                    <div className={Styles.action}>
                        <p>Edit Address</p>
                        <p className={Styles.delete} onClick={() => dispatch(deleteLocation(id))}>
                            Delete
                        </p>
                    </div>
                </div>
                <button
                    className={Styles.setPrimary}
                    onClick={() => dispatch(setPrimaryLocation(data))}
                >
                    Set as Primary
                </button>
            </div>
        );
    }
};

export default Location;
