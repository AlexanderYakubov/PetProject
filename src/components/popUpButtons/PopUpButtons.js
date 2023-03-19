import React from 'react';
import foundImg from "../../img/found.png";
import CancelBtn from "../cancelBtn/CancelBtn";
import SubmitBtn from "../submitBtn/SubmitBtn";
import stl from './popUpButtons.module.css';

const PopUpButtons = () => {
    return (
        <div className={stl.container}>
            <p>By clicking "Submit", you agree to us processing your information in accordance with <u>these terms</u>
            </p>
            <div className={stl.btns}>
                <div className={stl.cancelBtn}><CancelBtn width={'105'} text={'Cancel'}/></div>
                <SubmitBtn width={'148'} text={'Submit'} img={foundImg}/>
            </div>
        </div>
    );
};

export default PopUpButtons;