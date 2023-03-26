import React from 'react';
import stl from "./submitBtn.module.css";

const SubmitBtn = (props) => {
    return (
        <div className={stl.btn} style={{width: `${props.width}px`}}>{props.img ?
            <img src={props.img} style={{height:'16px'}} alt={'*'}/> : null}<div>{props.text}</div></div>

    );
};

export default SubmitBtn;