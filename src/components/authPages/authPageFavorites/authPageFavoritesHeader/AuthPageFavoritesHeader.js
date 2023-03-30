import React from 'react';
import Logo from "../../../utilsUI/Logo";
import stl from './authPageFavoritesHeader.module.css';

const AuthPageFavoritesHeader = () => {
    return (
        <div className={stl.container}>
            <Logo width={'142'} color={'green'}/>
        </div>
    );
};

export default AuthPageFavoritesHeader;