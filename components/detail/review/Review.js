import Rating from "@material-ui/lab/Rating";
import style from "../../../styles/Review.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import StarIcon from "@material-ui/icons/Star";

const Review = ({ ratingSort, avg, ratingLength }) => {
  const calcRatingLinear = (rating) => {
    if (rating) {
      return (rating / ratingLength) * 100;
    }
    return 0;
  };

  return (
    <div className={style.container}>
      <h3>Review({ratingLength})</h3>
      <div className={style.content}>
        <div className={style.star}>
          <h1>
            {avg === null ? 0 : avg.toFixed(1)}
            <span className={style.per}>/5</span>
          </h1>
          <Rating
            name="half-rating-read"
            readOnly
            value={avg}
            precision={0.5}
          />
          <p>({ratingLength})Review</p>
        </div>
        <div className={style.detail}>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>5</h5>
            <LinearProgress
              variant="determinate"
              value={calcRatingLinear(ratingSort["5"])}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>{ratingSort["5"]}</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>4</h5>
            <LinearProgress
              variant="determinate"
              value={calcRatingLinear(ratingSort["4"])}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>{ratingSort["4"]}</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>3</h5>
            <LinearProgress
              variant="determinate"
              value={calcRatingLinear(ratingSort["3"])}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>{ratingSort["3"]}</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>2</h5>
            <LinearProgress
              variant="determinate"
              value={calcRatingLinear(ratingSort["2"])}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>{ratingSort["2"]}</p>
          </div>
          <div className={style.rate}>
            <StarIcon style={{ fontSize: 20, color: "#ffb400" }} />
            <h5>1</h5>
            <LinearProgress
              variant="determinate"
              value={calcRatingLinear(ratingSort["1"])}
              color="primary"
              style={{ width: "150px", margin: "0 10px" }}
            />
            <p>{ratingSort["1"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
