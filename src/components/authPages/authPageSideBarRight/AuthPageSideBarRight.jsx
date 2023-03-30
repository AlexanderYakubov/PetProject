import React from 'react';
import stl from './authPageSideBarRight.module.css'
import ad1 from '../../../img/ad1.png';
import ad2 from '../../../img/ad2.png';
import ad3 from '../../../img/ad3.png';

const AuthPageSideBarRight = () => {
    return (
        <div className={stl.container}>
            <div className={stl.adBlock}>
                <img src={ad3} alt="ad3"/>
                <img src={ad1} alt="ad1"/>
                <img src={ad2} alt="ad2"/>
            </div>
        </div>
    );
};

export default AuthPageSideBarRight;