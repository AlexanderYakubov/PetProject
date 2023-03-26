import React, {useEffect, useState} from 'react';
import {getUid, logout} from "../../../firebase/auth-service";
import { writeNewPostData} from "../../../firebase/pet-services";
import AuthPageHeader from "./authPageHeader/AuthPageHeader";
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";

const AuthPageHome = () => {
    const [message, setMessage] = useState();
    const uid = getUid();
    return (
        <div>
            <AuthPageHeader/>
            <AuthPageSideBarLeft/>

            <button onClick={()=>logout()}>Logout</button>
            <form>
                <label>message</label>
                <input type="text" id={'message'} onChange={(e)=>setMessage(e.currentTarget.value)}/>
            </form>
            <br/>
            <button onClick={()=>writeNewPostData(uid, message)}>Write</button>

        </div>
    );
};

export default AuthPageHome;