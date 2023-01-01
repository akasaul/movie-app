import React from "react";
import "./assets/css/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
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
