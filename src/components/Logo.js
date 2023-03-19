import React from 'react';
import logoWhiteImg from "../img/logoWhite.png";
import logoGreenImg from '../img/logoGreen.svg';

const Logo = (props) => {
    return (
        <img src={props.color === 'green' ? logoGreenImg : logoWhiteImg} alt="Logo"
             style={{width: `${props.width}px`}}/>
    );
};

export default Logo;