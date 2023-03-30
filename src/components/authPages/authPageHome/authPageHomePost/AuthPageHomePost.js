import React, {useEffect, useState} from 'react';
import stl from './authPageHomePost.module.css';
import {getAuth} from "firebase/auth";
import {
    getFavoriteIdPosts,
    updateProfileAddFavoriteIdPost,
    updateProfileDeleteFavoriteIdPost,
} from "../../../../firebase/pet-services";

const AuthPageHomePost = (props) => {
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [update, setUpdate] = useState(false);
    const auth = getAuth();
    useEffect(() => {
        console.log(props.data.postId);
        getFavoriteIdPosts(auth.currentUser.uid).then(res => {
            console.log('------>', res.data(), res.data().postIds);
            setFavorites(res.data().postIds);
            if (res.data().postIds.includes(props.data.postId))
                setIsFavorite(true);
        }).catch(e => console.log(e));
        console.log(auth.currentUser);
        let hours1 = (Date.now() - props.data.postData.date) / 1000 / 60 / 60;
        let days1 = Math.floor(hours1 / 24);
        setDays(days1);
        let remainingHours = hours1 % 24;
        setHours(Math.trunc(remainingHours));
        let minutes1 = Math.round((remainingHours - Math.floor(remainingHours)) * 60);
        setMinutes(minutes1);
        console.log('render');
    }, []);


    return (
        <div className={stl.container}>
            <div className={stl.userIconBox}>
                <img className={stl.userIcon} src={props.data.postData.userIcon} alt=""/>
            </div>
            <div className={stl.wrapper}>
                <div className={stl.userInfo}>
                    <p className={stl.name}>{props.data.postData.userName}</p>
                    <p className={stl.time}>{`${days ? `${days}d` : ''} ${hours ? `${hours}h` : ''} ${minutes ? `${minutes}m` : ''}`}</p>
                </div>
                <div className={stl.imgBox}>
                    {props.data.postData.photo1 ? <img src={props.data.postData.photo1} alt=""/> : null}
                    {props.data.postData.photo2 ? <img src={props.data.postData.photo2} alt=""/> : null}
                    {props.data.postData.photo3 ? <img src={props.data.postData.photo3} alt=""/> : null}
                    {props.data.postData.photo4 ? <img src={props.data.postData.photo4} alt=""/> : null}
                </div>
                <p className={stl.text}>{props.data.postData.text}</p>
            </div>
            <p onClick={() => {
                if (!isFavorite) {
                    updateProfileAddFavoriteIdPost(auth.currentUser.uid, props.data.postId, favorites).then(res => console.log(res)).catch(e => console.log(e));

                } else {
                    updateProfileDeleteFavoriteIdPost(auth.currentUser.uid, props.data.postId, favorites).then(res => console.log(res)).catch(e => console.log(e));
                }
                getFavoriteIdPosts(auth.currentUser.uid).then(res => {
                    let data = res.data().postIds;
                    if (data.includes(props.data.postId))
                        setIsFavorite(true);
                    else
                        setIsFavorite(false);
                })
            }}>add/remove to favorites(toggle)</p>
            {isFavorite ? <p>Favorite</p> : <p>Lo favorite</p>}
        </div>
    );
};

export default AuthPageHomePost;