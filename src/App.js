import React from "react";
import "./assets/css/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details"
import TvDetails from "./pages/TvDetails";
import store from "./store";
import { Provider } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/movie/:id" exact element={<Details />} />
                    <Route path="/tv/:id" exact element={<TvDetails />} />
                    <Route path="/login" exact element={<LoginPage />} />
                    <Route path="/signup" exact element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
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
