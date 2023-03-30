import React, {useEffect, useState} from 'react';
import stl from './authPageNewPostMain.module.css';
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import foundImg from './../../../../img/found.png';
import {auth} from "../../../../firebase/firebase-config";
import {
    deletePhotoFromStorage,
    getRefForPhoto,
    uploadPicture,
    writeNewPostData
} from "../../../../firebase/pet-services";
import {getUid} from "../../../../firebase/auth-service";
import CancelBtn from "../../../utilsUI/cancelBtn/CancelBtn";
import {useNavigate} from "react-router-dom";
import {homePage} from "../../../../utils/constants";

const AuthPageNewPostMain = () => {
    const [text, setText] = useState(false);
    const [update, setUpdate] = useState(false);
    const [photos, setPhotos] = useState({
        photo1: false,
        photo2: false,
        photo3: false,
        photo4: false,
    });
    const [photoCounter, setPhotoCounter] = useState(0);
    const userName = auth.currentUser.displayName;
    const userIconRef = auth.currentUser.photoURL;
    const uid = getUid();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('rerender-------->');
    })

    function handleFileSelect(event) {
        console.log(uid)
        console.log((new Date()).getTime())
        const ref = `${uid}.${(new Date()).getTime()}`;
        const file = event.target.files[0];
        if (!file)
            return;

        uploadPicture(ref, file)
            .then(response => {
                if (response) {
                    console.log('is upload done?--------->', response);
                    getRefForPhoto(ref)
                        .then((url) => {
                            console.log('URL----->', url);
                            setPhotos(prevState => {
                                for (let photo in prevState) {
                                    if (!prevState[photo]) {
                                        prevState[photo] = {
                                            ref: url,
                                            file,
                                            name: file.name,
                                            refForDelete: ref,
                                        };
                                        setPhotoCounter(prevState => prevState + 1);
                                        return prevState;
                                    }
                                }
                                return prevState;
                            });
                        });
                }
            });
    }

    const handlerSubmitCLick = () => {

        let time = new Date();
        let data = {
            userIcon: userIconRef,
            date: time.getTime(),
            userName,
            text,
            photo1: !photos.photo1 ? false : photos.photo1.ref,
            photo2: !photos.photo2 ? false : photos.photo2.ref,
            photo3: !photos.photo3 ? false : photos.photo3.ref,
            photo4: !photos.photo4 ? false : photos.photo4.ref,
        };
        console.log(data);
        writeNewPostData(uid, data).catch(e=>console.log(e));
        navigate(`/${homePage}`);
    };


    function checkAmountPhotos() {
        let flag = false;
        for (let i in photoCounter) {
            flag = !!photoCounter[i];
        }
        return flag ? (<p>Max Photos</p>) : null;
    }

    function deletePhoto(element) {
        deletePhotoFromStorage(element[1].refForDelete).then(() => {
            console.log('delete------->uspeh');
            setUpdate(prevState => !prevState);// без этой строки не происходит ререндер(просто обновление стейта)
            setPhotos(prevState => {//Это изменение стейта не приводит к ререндеру
                prevState[element[0]] = false;
                return prevState;
            })
        })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <form method="post">
                <div>
                    <label htmlFor="text-input">Text input:</label>
                    <input type="text" id="text-input" name="text-input"
                           onChange={(e) => setText(e.currentTarget.value)}/>
                </div>
                <div>
                    <label htmlFor="photoInput">Photo 1:</label>
                    <input type="file" id="photoInput" name="photo1" onChange={e => handleFileSelect(e)}
                           style={{display: 'none'}}/>
                    <div onClick={() => {
                        const photoInput = document.getElementById('photoInput');
                        photoInput.click();
                    }}>
                        <CancelBtn width={'77'} text={'Browse'}/>
                    </div>
                </div>
                <div onClick={() => handlerSubmitCLick()}>
                    <SubmitBtn img={foundImg} width={'148'} text={'Submit'}/>
                </div>
            </form>

            <button onClick={() => {
                console.log(photos);
            }}>check photos
            </button>
            {checkAmountPhotos()}
            <div className={stl.photos}>
                {Object.entries(photos).map((element) => {
                    return element[1] ? <img src={element[1].ref} alt="picture" key={element[0]}/> : null
                })}
            </div>
            <button onClick={() => setUpdate(prevState => !prevState)}>update</button>
            <div className={stl.photoNames}>
                {Object.entries(photos).map((element) => {
                    return element[1] ? (
                            <div key={element[0]}>
                                <p>{element[1].name}</p>
                                <p onClick={() => deletePhoto(element)}>&#215;</p>
                            </div>
                        )
                        : null
                })}
            </div>
        </div>
    );
};

export default AuthPageNewPostMain;
