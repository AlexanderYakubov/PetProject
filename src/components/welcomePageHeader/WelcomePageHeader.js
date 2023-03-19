import React from 'react';
import Logo from "../Logo";
import stl from './welcomePageHeder.module.css';

const WelcomePageHeader = () => {
    return (
        <div className={stl.container}>
            <Logo width={'142'} color={'white'}/>
            <div className={`signInBtn ${stl.btn}`}>Sign in</div>
        </div>
    );
};

export default WelcomePageHeader;