import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase-config"
import {getAuth, updateProfile} from "firebase/auth";
import {homePage} from "../utils/constants";


export function registration(email, password, name) {
    let res;
    createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            res = response;
            console.log(response);
        })
        .then(() => {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL:'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            })
                .then(res => console.log(res))
        }).catch(e => console.log(e))
    return res;
}

export function login(email, password) {
    let res;
    signInWithEmailAndPassword(auth, email, password)
        .then(response => {
            console.log(response)
            res = response;
        })
        .catch(e => console.log(e))
    return res;
}

export function logout() {
    signOut(auth)
        .then(response => console.log(response))
        .catch(e => console.log(e))
}

export function getUid() {
    const user = auth.currentUser;
    if (user != null) {
        return user.uid;
    }
}





