import style from './Comment.module.css'
import React from "react";

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.Ipost = props.comments.postId;
        this.comments = props.comments;
    }
   render(){
    return(
        <div className={style.commentBox} >
            <h2>postId: {this.comments.postId}</h2>
            <h2>id: {this.comments.id}</h2>
            <h3>name: {this.comments.name}</h3>
            <h4>{this.comments.email}</h4>
            <h4>{this.comments.body}</h4>
        </div>
    );
   }
}
export default Comment;