import style from "../../styles/detailRight.module.css";
import Location from "@material-ui/icons/LocationOn";
import Ship from "@material-ui/icons/LocalShipping";

const Delivery = () => {
    return (
        <div className={style.delivery}>
            <h5>Delivery Method</h5>
            <div className={style.Location}>
                <Location fontSize="small" />
                <div className={style.send}>
                    <p>Delivery To :</p>
                    <h5>Muhammad Jawahiruzzaman</h5>
                    <span>Jawa barat, Kab.sukabumi, Cisaat, Selajambe</span>
                    <br />
                    <h6>Edit Location</h6>
                </div>
            </div>
            <div className={style.courier}>
                <Ship fontSize="small" />
                <div className={style.send}>
                    <p>Courier :</p>
                    <h5>Reguler</h5>
                    <span>Ongkir 10 rb - 11 rb</span>
                    <h6>See Courier Options</h6>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
