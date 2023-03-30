import React, {useEffect, useState} from 'react';
import {getAllFoundPosts, getAllLostPosts, getAllPosts} from "../../../../firebase/pet-services";
import AuthPageLostAndFoundPagesPost from "../authPageLostAndFoundPagesPost/AuthPageLostAndFoundPagesPost";

const AuthPageLostAndFoundPagesMain = (props) => {
    const [isFoundLoading, setIsFoundLoading] = useState(true);
    const [isLostLoading, setIsLostLoading] = useState(true);

    const [postsLost, setPostsLost] = useState([]);
    const [postsFound, setPostsFound] = useState([]);
    useEffect(() => {
        getAllLostPosts().then(response => {
            response.forEach((doc) => {
                setPostsLost(prevState => {
                    prevState.unshift({
                        postId: doc.id,
                        postData: doc.data(),
                    })
                    return prevState;
                });
            });
            setIsLostLoading(prevState => !prevState);
        })
        getAllFoundPosts().then(response => {
            response.forEach((doc) => {
                setPostsFound(prevState => {
                    prevState.unshift({
                        postId: doc.id,
                        postData: doc.data(),
                    })
                    return prevState;
                });
            });
            setIsFoundLoading(prevState => !prevState);
        })

    }, []);
    return (
        <div style={{width: '50vw'}}>
            <p>{props.type === 'lost' ? 'Lost pets:' : 'Found pets:'}</p>
            {props.type === 'lost' ?
                isLostLoading ? <p>Loading...</p> :
                    postsLost.map(post => <AuthPageLostAndFoundPagesPost key={post.postId} type={props.type}
                                                                         data={post}/>) : null}
            {props.type === 'found' ?
                isFoundLoading ? <p>Loading...</p> :
                    postsFound.map(post => <AuthPageLostAndFoundPagesPost key={post.postId}
                                                                          type={props.type}
                                                                          data={post}/>) : null}
        </div>
    );
};

export default AuthPageLostAndFoundPagesMain;