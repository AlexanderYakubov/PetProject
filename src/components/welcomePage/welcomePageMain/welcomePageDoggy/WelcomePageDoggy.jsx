import React from 'react';
import doggy from '../../../../img/Welcome_doggy.png';
import searchButton from '../../../../img/searchButton.svg';
import stl from './welcomePageDoggy.module.css';


const WelcomePageDoggy = () => {
    return (
        <div className={stl.welcomePage}>
            <div className={stl.welcomeMainDoggy}>
                <div className={stl.welcomeMain}>
                Welcome to your <span className={stl.highlight}>pawfessional</span> community
                </div>
                <div className={"welcome-main_buttons"}>
                    <button className={stl.buttonLost}>
                        I lost my pet!
                        <img src={searchButton} alt="search"/>
                    </button>
                    <button className={stl.buttonFound}>
                        I found a pet!
                    </button>
                </div>
                <div className={stl.welcomeMainJoin}>
                    I'm okay, just want to <span className={stl.highlight}><u>JOIN</u></span> the pawsome community!
                </div>
            </div>
            <div className={stl.welcomeMainDoggyImg}>
                <img src={doggy} alt='doggy_Main' className={stl.doggyImg}/>
            </div>
        </div>
    );
};

export default WelcomePageDoggy;