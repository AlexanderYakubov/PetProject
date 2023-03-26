import React from 'react';
import Logo from "../../utilsUI/Logo";
import stl from './welcomePageHeder.module.css';

const WelcomePageHeader = (props) => {
    return (
        <div className={stl.container}>
            <Logo width={'142'} color={'white'}/>
            <div className={`signInBtn ${stl.btn}`} onClick={()=>props.openPopUp()}>Sign in</div>
        </div>
    );
};

export default WelcomePageHeader;