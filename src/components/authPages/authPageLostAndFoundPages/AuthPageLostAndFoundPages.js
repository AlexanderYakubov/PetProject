import React from 'react';
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageLostAndFoundPagesHeader from "./authPageLostAndFoundPagesHeader/AuthPageLostAndFoundPagesHeader";
import AuthPageLostAndFoundPagesMain from "./authPageLostAndFoundPagesMain/AuthPageLostAndFoundPagesMain";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import stl from './authPageLostAndFoundPages.module.css';

const AuthPageLostAndFoundPages = (props) => {

    return (
        <div>
            <AuthPageLostAndFoundPagesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <AuthPageLostAndFoundPagesMain type={props.type}/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundPages;