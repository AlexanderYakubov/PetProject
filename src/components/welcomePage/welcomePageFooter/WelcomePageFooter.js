import React from 'react';
import Logo from "../../utilsUI/Logo";
import WelcomePageFooterContacts from "./welcomePageFooterContacts/WelcomePageFooterContacts";
import WelcomePageFooterNav from "./welcomePageFooterNav/WelcomePageFooterNav";
import stl from './welcomePageFooter.module.css';

const WelcomePageFooter = () => {
    return (
        <div className={stl.container}>
            <Logo width={'201'} color={'white'}/>
            <WelcomePageFooterContacts/>
            <WelcomePageFooterNav/>
        </div>
    );
};

export default WelcomePageFooter;