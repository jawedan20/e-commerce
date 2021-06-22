import Styles from "../../../styles/Address.module.css";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
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
          <h4 style={{ marginTop: "5px" }}>{name}</h4>
          <p>{phone}</p>
          <p>{city}</p>
          <p>{address}</p>
          <p>{other}</p>
        </div>
        <div className={Styles.action}>
          <Edit style={{ fontSize: 25, color: "#f40057" }} />
          <div onClick={() => dispatch(deleteLocation(id))}>
            <Delete
              style={{ fontSize: 25, color: "#f40057", margin: "0 10px" }}
            />
          </div>
          <button
            style={{
              background: "none",
              color: "lightGrey",
              border: "1px solid lightgrey",
              cursor: "not-allowed",
            }}
          >
            Set as Primary
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ background: "none", border: "none" }}
        className={Styles.list}
      >
        <div>
          <h5>{name_location}</h5>
          <h4 style={{ marginTop: "5px" }}>{name}</h4>
          <p>{phone}</p>
          <p>{city}</p>
          <p>{address}</p>
        </div>
        <div className={Styles.action}>
          <Edit style={{ fontSize: 25, color: "#f40057" }} />
          <div onClick={() => dispatch(deleteLocation(id))}>
            <Delete
              style={{ fontSize: 25, color: "#f40057", margin: "0 10px" }}
            />
          </div>
          <button onClick={() => dispatch(setPrimaryLocation(id))}>
            Set as Primary
          </button>
        </div>
      </div>
    );
  }
};

export default Location;
