import React from "react";
import Review from "./Review";
import CommentFilter from "./comment";

const sortRateWithScore = (rating) => {
  const data = new Object();
  rating.length > 0 &&
    rating.map((item) => {
      const { rating } = item;
      if (rating in data) {
        data[rating] = data[rating] += 1;
      } else {
        data[rating] = 1;
      }
    });
  return data;
};

const ReviewRoot = ({ data, avg }) => {
  return (
    <>
      <Review
        ratingSort={sortRateWithScore(data)}
        avg={avg}
        ratingLength={data.length}
      />
      <CommentFilter data={data} />
    </>
  );
};

export default ReviewRoot;
