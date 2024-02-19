import Comment from './Comment';
import React from "react";
import axios from "axios"


class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }
  
  componentDidMount() {
    axios('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        this.setState({comment : response.data})
    }); 
    }
  
  render() {
    return (
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {this.state.comment?.map((comments) => <Comment key={comments.id} comments={comments} />)}
      </div>
    );
  }
}

export default Comments;
