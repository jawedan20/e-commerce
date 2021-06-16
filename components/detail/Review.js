import Rating from "@material-ui/lab/Rating";
import style from "../../styles/Review.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import StarIcon from "@material-ui/icons/Star";

const Review = () => {
  return (
    <div className={style.container}>
      <h3>Review(10)</h3>
      <div className={style.content}>
        <div className={style.star}>
          <h1>
            4.5
          <span className={style.per}>/5</span>
          </h1>
          <Rating readOnly value={4} precision={0.5} />
          <p>(100)Review</p>
        </div>
        <div className={style.detail}>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>5</h5>
            <LinearProgress
              variant="determinate"
              value={20}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>100</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>4</h5>
            <LinearProgress
              variant="determinate"
              value={20}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>100</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>3</h5>
            <LinearProgress
              variant="determinate"
              value={20}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>100</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>2</h5>
            <LinearProgress
              variant="determinate"
              value={20}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>100</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>1</h5>
            <LinearProgress
              variant="determinate"
              value={20}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
