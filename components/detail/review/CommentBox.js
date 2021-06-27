import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating"
import style from "../../../styles/Review.module.css"
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import { srcImage } from "../../../utils/url";

const CommentBox = ({data}) => {
    const {username,profile,create_at,rating,ulasan} = data
    return (
        <div className={style.Comment}>
            <div className={style.profile}>
                <Avatar src={srcImage(profile)} alt={"profile mu.."} />
                <div style={{marginLeft:"15px"}}>
                    <h5>{username}</h5>
                    <p>{create_at}</p>
                </div>
            </div>
            <div className={style.comment}>
                <Rating readOnly value={rating} precision={0.5} />
                <p>{ulasan}</p>
            </div>
            {/* <div className={style.action}>
                <span>2</span>
                <ThumbUp style={{fontSize:"20", margin:"0 20px 0 8px"}}/>
                <h5>Laporkan</h5>
            </div> */}
        </div>
    )
}

export default CommentBox
