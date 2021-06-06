import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header + ' bg-blue-900'}>
        <img src='https://git-scm.com/images/logos/1color-darkbg@2x.png' />
    </header>
}

export default Header;