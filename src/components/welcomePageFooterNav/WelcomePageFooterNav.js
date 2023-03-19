import React from 'react';
import foundImg from '../../img/found.png';
import lostImg from '../../img/lost.png';
import hotelsImg from '../../img/hotels.png';
import walkingImg from '../../img/walking.png';
import fosteringImg from '../../img/fostering.png';
import vetHelpImg from '../../img/vetHelp.png';
import stl from './welcomePageFooterNav.module.css';

const WelcomePageFooterNav = () => {
    return (
        <div className={stl.container}>
            <ul>
                <li><img src={lostImg} alt="lost"/> Lost</li>
                <li><img src={foundImg} alt="found"/> Found</li>
                <li><img src={vetHelpImg} alt="vetHelp"/> VetHelp</li>
            </ul>
            <ul>
                <li><img src={hotelsImg} alt="hotels"/> Hotels</li>
                <li><img src={walkingImg} alt="walking"/> Walking</li>
                <li><img src={fosteringImg} alt="fostering"/> Fostering</li>
            </ul>
        </div>

    );
};

export default WelcomePageFooterNav;