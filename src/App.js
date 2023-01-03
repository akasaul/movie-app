import React, { useEffect } from "react";
import "./assets/css/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details"
import TvDetails from "./pages/TvDetails";
import store from "./store";
import { Provider } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
    const dispatch = useDispatch();
    const userNew = useSelector((state) => state.user.user);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch(login({
                    name: user.displayName,
                    email: user.email
                  }))
            } else {
                dispatch(logout());
            }
        })
    }, []);
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/movie/:id" exact element={<Details />} />
                    <Route path="/tv/:id" exact element={<TvDetails />} />
                    <Route path="/login" exact element={<LoginPage />} />
                    <Route path="/signup" exact element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;

// Trending 
// Generes
// Discover - Movie & Tv
// imagePath - https://image.tmdb.org/t/p/original//lAXONuqg41NwUMuzMiFvicDET9Y.jpg
// poster - https://image.tmdb.org/t/p/original/[poster_path]
// Search - multisearch
// Get details


// primary: "#171717",
//         red: "#991b1b",
//         gray: "#3f3f46",
//         lightGray: "#737373"
