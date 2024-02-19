import style from './Post.module.css'
import React from "react";

class Post extends React.Component{
    constructor(props){
        super(props);
        this.post = props.post; 
    }
    render(){
        return(
            <div className={style.alobBox}>
                <h2>{this.post.id}</h2>
                <h3>{this.post.title}</h3>
                <h3>{this.post.body}</h3>
            </div>
        );
    }
}
export default Post;