import React, {useEffect, useState} from 'react';
import stl from './authPageHomePost.module.css';
import {getAuth} from "firebase/auth";
import {
    getFavoriteIdPosts, isPostFavorite,
    updateProfileAddFavoriteIdPost,
    updateProfileDeleteFavoriteIdPost,
} from "../../../../firebase/pet-services";

const AuthPageHomePost = (props) => {
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    // const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const auth = getAuth();
    const postId = props.data.postId
    useEffect(() => {
        // getFavoriteIdPosts(auth.currentUser.uid).then(res => {
        //     // setFavorites(res.data().postIds);
        //     if (res.data().postIds.includes(postId))
        //         setIsFavorite(true);
        // }).catch(e => console.log(e));
        isPostFavorite(auth.currentUser.uid, postId).then(res=> setIsFavorite(res));
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
                    <div>
                        {props.data.postData.photo1 ? <img src={props.data.postData.photo1} alt=""/> : null}
                        {props.data.postData.photo2 ? <img src={props.data.postData.photo2} alt=""/> : null}
                        {props.data.postData.photo3 ? <img src={props.data.postData.photo3} alt=""/> : null}
                        {props.data.postData.photo4 ? <img src={props.data.postData.photo4} alt=""/> : null}
                        <p className={stl.text}>{props.data.postData.text}</p>
                    </div>
                </div>
            </div>
            <p onClick={() => {
                if (!isFavorite) {
                    updateProfileAddFavoriteIdPost(auth.currentUser.uid, props.data.postId).then(res => {
                        setIsFavorite(res);
                    }).catch(e => console.log(e));
                } else {
                    updateProfileDeleteFavoriteIdPost(auth.currentUser.uid, props.data.postId).then(res => {
                        setIsFavorite(res);
                    }).catch(e => console.log(e));
                }

            }}>add/remove to favorites(toggle)</p>
            {isFavorite ? <p>Favorite</p> : <p>Lo favorite</p>}
        </div>
    );
};

export default AuthPageHomePost;