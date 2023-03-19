import React from 'react';
import stl from './popUpSignIn.module.css';

const PopUpSignIn = () => {
    return (
        <div className={stl.container}>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id={'email'} placeholder={'helenjohnson@gmail.com'}/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id={'password'} placeholder={'********'}/>
            </form>
            <div className={stl.forgotPassword}>
                <p><u>Forgot password?</u></p>
            </div>
        </div>
    );
};

export default PopUpSignIn;