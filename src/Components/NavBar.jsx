import style from './NavBar.module.css'
import {Link} from 'react-router-dom';
import React from "react";

class NavBar extends React.Component{


    render(){
        return(
            <header className={style.header}>
                <ol className={style.nav} >
                    <li>
                        <Link className={style.navLink} to="/posts">posts</Link>
                    </li>
                    <li>
                        <Link className={style.navLink} to="/users">users</Link>
                    </li>
                    <li>
                        <Link className={style.navLink} to="/comments">comments</Link>
                    </li>
                    
                </ol>
            </header>
        );
    }
}

export default NavBar;