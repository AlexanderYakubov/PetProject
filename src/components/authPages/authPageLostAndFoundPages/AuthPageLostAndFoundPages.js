import React, {useEffect, useState} from 'react';
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageLostAndFoundPagesHeader from "./authPageLostAndFoundPagesHeader/AuthPageLostAndFoundPagesHeader";
import AuthPageLostAndFoundPagesMain from "./authPageLostAndFoundPagesMain/AuthPageLostAndFoundPagesMain";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import stl from './authPageLostAndFoundPages.module.css';
import {getAllFoundPosts, getAllLostPosts} from "../../../firebase/pet-services";

const AuthPageLostAndFoundPages = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log(isLoading);
        if (props.type === 'lost')
            getAllLostPosts().then(response => {
                response.forEach((doc) => {
                    setPosts(prevState => {
                        prevState.unshift({
                            postId: doc.id,
                            postData: doc.data(),
                        })
                        return prevState;
                    });
                    console.log(doc.id, " => ", doc.data());
                });

                setIsLoading(prevState => !prevState);
                console.log(posts, isLoading);
            })
        else
            getAllFoundPosts().then(response => {
                response.forEach((doc) => {
                    setPosts(prevState => {
                        prevState.unshift({
                            postId: doc.id,
                            postData: doc.data(),
                        })
                        return prevState;
                    });
                    console.log(doc.id, " => ", doc.data());
                });

                setIsLoading(prevState => !prevState);
                console.log(posts, isLoading);
            })

    },[]);

    return (
        <div>
            <AuthPageLostAndFoundPagesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <AuthPageLostAndFoundPagesMain type={props.type} isLoading={isLoading} posts={posts}/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundPages;