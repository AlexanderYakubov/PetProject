import React from 'react';
import Logo from "../Logo";
import PopUpSignUp from "../popUpSignUp/PopUpSignUp";
import PopUpSignIn from "../popUpSignIn/PopUpSignIn";
import stl from './popUp.module.css';
import PopUpButtons from "../popUpButtons/PopUpButtons";
import PopUpAuthInfo from "../popUpAuthInfo/PopUpAuthInfo";

const PopUp = () => {
    return (
        <div className={stl.container}>
            <div className={stl.logo}><Logo color={'green'} width={'200'}/></div>
            <div className={stl.closeBtn}>&#215;</div>
            <PopUpAuthInfo/>
            <div>
                <div><span>Sign up</span></div>
                <div><span>Sign in</span></div>
                {true===false ? <PopUpSignUp/> : <PopUpSignIn/>}
            </div>
            <hr/>
            <PopUpButtons/>
        </div>
    );
};

export default PopUp;