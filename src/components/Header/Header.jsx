import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header + ' bg-blue-900'}>
        <img src='https://git-scm.com/images/logos/1color-darkbg@2x.png' />

        <div className={s.loginBlock }>
            {props.isAuth 
            ? <div> {props.login} - <button onClick={props.logout}>log out</button> </div> 
            :<NavLink to = {'/login'}>Login</NavLink>}
            
        </div>
    </header>
}

export default Header;