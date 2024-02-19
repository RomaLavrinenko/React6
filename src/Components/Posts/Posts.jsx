import Post from './Post';
import React from "react";
import axios from "axios"


class Posts extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          post: []
        };
      }
      componentDidMount(){
        axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({post : response.data})
        }); 
      }

    render(){
      return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {this.state.post?.map((post) => <Post key={post.id} post={post}/>)}
        </div>    
    );
    }
  };


export default Posts;
