import React, {useEffect, useState} from 'react';
import AuthPageFavoritesHeader from "./authPageFavoritesHeader/AuthPageFavoritesHeader";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import AuthPageHomeMain from "../authPageHome/authPageHomeMain/AuthPageHomeMain";
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import {getFavoriteIdPosts} from "../../../firebase/pet-services";
import {getUid} from "../../../firebase/auth-service";

const AuthPageFavorites = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [ids, setIds] = useState(null);
    const uid = getUid();
    useEffect(()=>{
        getFavoriteIdPosts(uid).then(res=> {
            console.log('favorites--------->', res.data());
            setIds(res.data());
            setIsLoading(false);
        })
    },[]);
    return (
        <div>
            <AuthPageFavoritesHeader/>
            <div>
                <AuthPageSideBarLeft/>
                {isLoading? <p>Loading...</p> : <AuthPageHomeMain ids={ids.postIds}/>}
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageFavorites;