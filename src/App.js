import './App.css';
import WelcomePage from "./components/welcomePage/WelcomePage";
import AuthPageHome from "./components/authPages/authPageHome/authPageHome";
import {useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {homePage, newPostPage} from "./utils/constants";
import {auth, db} from "./firebase/firebase-config";
import {useDispatch, useSelector} from "react-redux";
import {changeIsLoadingAction} from "./redux/actions/popUpActions";
import {ref} from "firebase/database";
import AuthPageNewPost from "./components/authPages/authPageNewPost/authPageNewPost";

function App() {
    const [update, setUpdate] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.popUp.isLoading);
    const location = useLocation();

    useEffect(() => {
        // console.log(location.pathname)
        auth.onAuthStateChanged(() => {
            console.log('auth Changed', auth);
            if (auth)
                dispatch(changeIsLoadingAction(false));
            if (!auth.currentUser)
                navigate(`/`);
            else {
                if (location.pathname === '/')
                    navigate(`/${homePage}`);
                navigate(location.pathname);
            }


            // if (auth.currentUser) {
            //     navigate(`/${homePage}`);
            //     console.log(auth.currentUser);
            // } else if (!auth.currentUser){
            //
            //     navigate(`/`);
            //     console.log('currentUser - null');
            // }
        });
    }, []);

    return isLoading ? (<p>Loading...</p>) : (
        <Routes>
            <Route path={`/`} element={<WelcomePage/>}/>
            <Route path={`/${homePage}`} element={<AuthPageHome/>}/>
            <Route path={`/${newPostPage}`} element={<AuthPageNewPost/>}/>
        </Routes>
    );
}

export default App;
