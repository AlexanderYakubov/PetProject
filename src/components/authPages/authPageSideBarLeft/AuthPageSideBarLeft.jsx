import React from 'react';
import stl from './authPageSideBarLeft.module.css';
import lostImg from '../../../img/lost.png';
import foundImg from '../../../img/found.png';
import homeImg from '../../../img/hotels.png';
import servicesImg from '../../../img/fostering.png';
import favoritesImg from '../../../img/walking.png';
import logOut from '../../../img/heart.png';
import {auth} from "../../../firebase/firebase-config";
import {useLocation, useNavigate} from "react-router-dom";
import {
    authCabinet,
    favoritesPage,
    foundPage,
    homePage,
    hotelPage,
    lostPage,
    personaCabPage
} from "../../../utils/constants";
import {logout} from "../../../firebase/auth-service";

const AuthPageSideBarLeft = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.slice(1);
    console.log('location---------------------------->',path);
    return (<aside className={stl.aside}>
            <ul>
                <li className={path === homePage ? stl.active : ''}
                    onClick={e => {
                    navigate(`/${homePage}`)
                }}><img src={homeImg} alt=""/>Home
                </li>
                <li className={path === lostPage ? stl.active : ''}
                    onClick={e => {
                    navigate(`/${lostPage}`)
                }}><img src={lostImg} alt=""/>Lost
                </li>
                <li className={path === foundPage ? stl.active : ''}
                    onClick={e => {
                    navigate(`/${foundPage}`)
                }}><img src={foundImg} alt=""/>Found
                </li>
                <li className={path === hotelPage ? stl.active : ''}
                    onClick={e => {
                    navigate(`/${hotelPage}`)
                }}><img src={servicesImg} alt=""/>Services
                </li>
                <li className={path === favoritesPage ? stl.active : ''}
                    onClick={e => {
                    navigate(`/${favoritesPage}`)
                }}><img src={favoritesImg} alt=""/>Favorites
                </li>
            </ul>
            <p className={stl.hr}>
                <hr/>
            </p>
            <div className={`${stl.user} ${path === authCabinet ? stl.active : ''}`} onClick={e => {
                navigate(`/${authCabinet}`)
            }}>
                <img className={stl.userImg} src={auth.currentUser ? auth.currentUser.photoURL : ''} alt=""/>
                <div className={stl.userName}>
                    <p>
                        {auth.currentUser ? auth.currentUser.displayName : ''}
                    </p>
                </div>
            </div>
            <div className={stl.logout} onClick={e => {
                logout()
            }}>
                <img className={stl.logoutImg} src={logOut} alt=""/>
                Logout
            </div>
            <p className={stl.hr}>
                <hr/>
            </p>

        </aside>);
};

export default AuthPageSideBarLeft;