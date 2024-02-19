import style from './User.module.css'
import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.user = props.user;
    }
   render(){
    return(
        <div className={style.todoBox}>
            <h2>{this.user.id}</h2>
            <h3>{this.user.name + this.user.username}</h3>
            <h3>{this.user.email}</h3>
            <h3>{this.user.phone}</h3>

        </div>
    );
   }
}
export default User;