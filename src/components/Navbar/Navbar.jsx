import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item + ' py-2 hover:bg-gray-700 active:bg-green-700'}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active} py-2 hover:bg-gray-700`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item + ' py-2' + ' hover:bg-gray-700'}>
                <a>News</a>
            </div>
            <div className={s.item + ' py-2' + ' hover:bg-gray-700'}>
                <a>Music</a>
            </div>
            <div className={s.item + ' py-2' + ' hover:bg-gray-700'}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;