import style from './Comment.module.css'
import {GetPosts} from '../service/ApiService'

const Comment = (props) =>{
    const Ipost = props.comments.postId;
    const handleClick = () =>{
        GetPosts.handlePosts(Ipost);

    }
    return(
        <div className={style.commentBox} onClick={handleClick}>
            <h2>postId: {props.comments.postId}</h2>
            <h2>id: {props.comments.id}</h2>
            <h3>name: {props.comments.name}</h3>
            <h4>{props.comments.email}</h4>
            <h4>{props.comments.body}</h4>
        </div>
    );
}
export default Comment;