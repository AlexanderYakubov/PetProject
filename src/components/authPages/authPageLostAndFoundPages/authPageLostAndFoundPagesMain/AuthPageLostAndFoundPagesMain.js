import React, {useEffect, useState} from 'react';
import {getAllFoundPosts, getAllLostPosts, getAllPosts} from "../../../../firebase/pet-services";
import AuthPageLostAndFoundPagesPost from "../authPageLostAndFoundPagesPost/AuthPageLostAndFoundPagesPost";

const AuthPageLostAndFoundPagesMain = (props) => {
    return (props.isLoading ? <p>loading...</p> :
        <div style={{width: '50vw'}}>
            <p>{props.type === 'lost' ? 'Lost pets:' : 'Found pets:'}</p>
            {
                // props.isLoading ? <p>Loading</p> :
                props.posts.map(post =><AuthPageLostAndFoundPagesPost key={post.postId} type={props.type} data={post}/>)}
        </div>
    );
};

export default AuthPageLostAndFoundPagesMain;