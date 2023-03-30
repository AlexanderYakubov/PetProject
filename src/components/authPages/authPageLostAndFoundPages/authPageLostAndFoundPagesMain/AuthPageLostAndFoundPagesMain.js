import React, {useEffect, useState} from 'react';
import {getAllFoundPosts, getAllLostPosts, getAllPosts} from "../../../../firebase/pet-services";
import AuthPageLostAndFoundPagesPost from "../authPageLostAndFoundPagesPost/AuthPageLostAndFoundPagesPost";

const AuthPageLostAndFoundPagesMain = (props) => {
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
        <div style={{width: '50vw'}}>
            <p>{props.type === 'lost' ? 'Lost pets:' : 'Found pets:'}</p>
            {isLoading ? <p>Loading</p> : posts.map(post =><AuthPageLostAndFoundPagesPost key={post.postId} type={props.type} data={post}/>)}
        </div>
    );
};

export default AuthPageLostAndFoundPagesMain;