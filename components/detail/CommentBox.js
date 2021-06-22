import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating"
import style from "../../styles/Review.module.css"
import ThumbUp from '@material-ui/icons/ThumbUpAlt';

const CommentBox = () => {
    return (
        <div className={style.Comment}>
            <div className={style.profile}>
                <Avatar/>
                <div style={{marginLeft:"15px"}}>
                    <h5>Username</h5>
                    <p>Time</p>
                </div>
            </div>
            <div className={style.comment}>
                <Rating readOnly value={4} precision={0.5} />
                <p>warnanya agak pucat yah</p>
            </div>
            <div className={style.action}>
                <button><ThumbUp/></button>
                <h5>Laporkan</h5>
            </div>
        </div>
    )
}

export default CommentBox
