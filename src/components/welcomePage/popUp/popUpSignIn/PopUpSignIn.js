import React, {useState} from 'react';
import stl from './popUpSignIn.module.css';
import {useDispatch, useSelector} from "react-redux";
import {saveDataAction} from "../../../../redux/actions/popUpActions";

const PopUpSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return (
        <div className={stl.container}>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id={'email'} placeholder={'helenjohnson@gmail.com'}
                       onChange={e => {
                           setEmail(e.currentTarget.value);
                           dispatch(saveDataAction({password, email:e.currentTarget.value, name: ''}));
                       }}
                       value={email}/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id={'password'} placeholder={'********'}
                       onChange={e => {
                           setPassword(e.currentTarget.value);
                           dispatch(saveDataAction({password:e.currentTarget.value, email, name: ''}));
                       }}
                       value={password}
                />
            </form>
            <div className={stl.forgotPassword}>
                <p><u>Forgot password?</u></p>
            </div>
        </div>
    );
};

export default PopUpSignIn;