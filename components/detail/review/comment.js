import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";
import style from "../../../styles/Review.module.css";
import CommentBox from "./CommentBox";

const comment = ({ data }) => {
	const [comments, setComments] = useState(data);

	const filterByRating = (rate) => {
		setComments(data.filter((item) => item.rating === rate));
	};

	return (
		<>
			<div className={style.nav}>
				<p>Filter</p>
				<div className={style.navList}>
					<button onClick={() => setComments(data)}>All</button>
					<button onClick={() => filterByRating(5)}>
						<StarIcon style={{ fontSize: 20, color: "#ffb400" }} />5
					</button>
					<button onClick={() => filterByRating(4)}>
						<StarIcon style={{ fontSize: 20, color: "#ffb400" }} />4
					</button>
					<button onClick={() => filterByRating(3)}>
						<StarIcon style={{ fontSize: 20, color: "#ffb400" }} />3
					</button>
					<button onClick={() => filterByRating(2)}>
						<StarIcon style={{ fontSize: 20, color: "#ffb400" }} />2
					</button>
					<button onClick={() => filterByRating(1)}>
						<StarIcon style={{ fontSize: 20, color: "#ffb400" }} />1
					</button>
				</div>
			</div>
			<h5 style={{ color: "#444444" }}>ALL REVIEW({comments.length})</h5>
			{comments.length > 0 ? (
				comments.map((item, i) => {
					return <CommentBox key={i} data={item} />;
				})
			) : (
				<p>no review yet</p>
			)}
		</>
	);
};

export default comment;
