import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";

import {setAuthUserData} from "../Auth/thunks";
import {auth} from "../firebase";

import Header from "./components/Header";
import MyRoutes from "./routes";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch(setAuthUserData(authUser));
            } else {
                dispatch(setAuthUserData(null));
            }
        });
    }, []);

    return (
        <div>
            <Header/>
            <MyRoutes/>
        </div>
    );
};
export default App;
