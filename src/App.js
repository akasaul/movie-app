import React from "react";
import "./assets/css/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/movie/:id" exact element={<Details />} />
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
