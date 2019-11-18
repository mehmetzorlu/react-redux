import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="nav-wrapper teal lighten-1">
            <a className="brand-logo left">Admin Console</a>
            <ul className="right">
                <div className="navbar">
                    <div className="navbar-list">
                        <li><NavLink to="/users" >Users</NavLink></li>
                        <li><NavLink to="/posts" >Posts</NavLink></li>
                        <li><NavLink to="/todos" >Todos</NavLink></li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;