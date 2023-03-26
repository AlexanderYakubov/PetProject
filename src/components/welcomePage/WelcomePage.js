import React, {useEffect, useState} from 'react';
import WelcomePageHeader from "./welcomePageHeader/WelcomePageHeader";
import WelcomePageFooter from "./welcomePageFooter/WelcomePageFooter";
import WelcomePageMain from "./welcomePageMain/WelcomePageMain";
import PopUp from "./popUp/PopUp";
import ReactModal from "react-modal";
import stl from './welcomePage.module.css';

const WelcomePage = () => {
    const [showPopUp, setShowPopUp] = useState(false);


    const openPopUp = () => {
        document.body.style.overflow = "hidden";
        document.getElementById('welcomePage').style.filter = 'blur(10px)';
        setShowPopUp(true);
    };

    const closePopUp = () => {
        document.body.style.overflow = "";
        document.getElementById('welcomePage').style.filter = 'blur(0)';
        setShowPopUp(false);
    };

    return (
        <div>
            <div id={'welcomePage'}>
                <WelcomePageHeader openPopUp={openPopUp}/>
                <WelcomePageMain/>
                <WelcomePageFooter/>
            </div>
            <ReactModal
                isOpen={showPopUp}
                onRequestClose={closePopUp}
                className={stl.ReactModal__Content}
            >
                <PopUp closePopUp={closePopUp}/>
            </ReactModal>
        </div>
    );
};

export default WelcomePage;