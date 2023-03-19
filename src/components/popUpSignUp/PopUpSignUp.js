import React from 'react';
import stl from './popUpSignUp.module.css';

const PopUpSignUp = () => {
    return (
        <div className={stl.container}>
            <form>
                <div>
                    <label htmlFor={'name'}>Name:</label>
                    <input type="text" id={'name'} placeholder={'Helen Johnson'}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id={'email'} placeholder={'helenjohnson@gmail.com'}/>
                </div>
                <div>
                    <label htmlFor={'password1'}>Password:</label>
                    <input type="password" id={'password1'} placeholder={'********'}/>
                </div>
                <div>
                    <label htmlFor={'password2'}>Password:</label>
                    <input type="password" id={'password2'} placeholder={'********'}/>
                </div>
            </form>
            <div className={stl.textContainer}>
                <p>Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and one special character or number.</p>
                <p>Please re-enter your password.</p>
            </div>
        </div>
    );
};

export default PopUpSignUp;