import { Divider } from "@material-ui/core";
import { useState } from "react";
import style from "../../styles/description.module.css";
import PanelImage from "../../components/detail/PanelImage";
import Store from "../../components/detail/Store";
import Delivery from "../../components/detail/Delivery";
import Bottom from "../../components/detail/Bottom";
import Review from "../../components/detail/Review";
import Comment from "../../components/detail/comment";
import StarIcon from "@material-ui/icons/Star";
import CommentBox from "../../components/detail/CommentBox"

const detail = ({ data }) => {
  const [key, setKey] = useState(0);
  const active = {
    borderColor: "#0094da",
  };
  return (
    <>
      <div className={style.box}>
        <PanelImage data={data} active={active} />
        <div className={style.content}>
          <div className={style.container}>
            <h3 className={style.title}>{data.title}</h3>
            <p>
              sold {data.sold} &#8226;{" "}
              <span>
                <StarIcon style={{ fontSize: 15, verticalAlign:"middle" }} />
                {data.rating_avg}({data.rating ? data.rating.length : 0}){" "}
              </span>
            </p>
            {/* error handle nama na */}
            <h2 className={style.price}>Rp{data.varian[key].price}</h2>
            <Divider style={{ marginBottom: "25px", marginTop: "20px" }} />
            <h4>
              Variant: <span>{data.varian[key].name}</span>
            </h4>
            <div className={style.varian}>
              {data.varian.map((varian, i) => {
                return (
                  <div
                    className={style.variant}
                    style={i == key ? active : null}
                    key={i}
                    onClick={() => setKey(i)}
                  >
                    <h6>{varian.name}</h6>
                  </div>
                );
              })}
            </div>
            <Divider style={{ marginBottom: "25px", marginTop: "20px" }} />
            <h4>
              Category: <span>{data.category}</span>
            </h4>
            <p>{data.desc}</p>
          </div>
          <div>
            <Store data={data} />
            <Delivery />
          </div>
        </div>
      </div>
      <div className={style.Review}>
        <Review />
        <Comment />
        <CommentBox />
      </div>
      <Bottom data={data} index={key} />
    </>
  );
};

export default detail;
