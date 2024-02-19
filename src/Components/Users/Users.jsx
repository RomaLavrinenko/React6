import User from './User';
import React from "react";
import axios from "axios"


class Users extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        user: []
      };
      
    }
    componentDidMount(){
      axios('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
          this.setState({user : response.data})
      }); 
        }
    render(){
      return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {this.state.user?.map((user) => <User key={user.id} user={user}/>)}
        </div>
        
    );
    }
}

export default Users;