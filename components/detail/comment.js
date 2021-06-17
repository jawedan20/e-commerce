import StarIcon from "@material-ui/icons/Star";
import style from "../../styles/Review.module.css";

const comment = () => {
    return (
        <>
            <div className={style.nav}>
                <p>Filter</p>
                <button>All</button>
                <button><StarIcon style={{ fontSize: 20, color: "#ffb400" }}/>5</button>
                <button><StarIcon style={{ fontSize: 20, color: "#ffb400" }}/>4</button>
                <button><StarIcon style={{ fontSize: 20, color: "#ffb400" }}/>3</button>
                <button><StarIcon style={{ fontSize: 20, color: "#ffb400" }}/>2</button>
                <button><StarIcon style={{ fontSize: 20, color: "#ffb400" }}/>1</button>
            </div>
            <h5>ALL REVIEW(10)</h5>
            <div>

            </div>

        </>
    )
}

export default comment
