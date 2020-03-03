import React, { useState } from "react";

import Header from './components/Header';
import Search from'./components/Search';
import Movie from './components/Movie';
import './App.css';
const movie=[{title :"Parasite",
              poster:"https://www.imdb.com/title/tt6751668/mediaviewer/rm3194916865",
              year: "2019",
              rating:"8"},
              {title :"joker",
              poster:"https://www.imdb.com/title/tt7286456/mediaviewer/rm3353122305",
              year: "2019",
              rating:"7"},
              {title :"Avengers: Endgame",
              poster:"https://www.imdb.com/title/tt4154796/mediaviewer/rm2775147008",
              year: "2019",
              rating:"6"}
]
const App = () => {
    return (
     <div className="App">
      <Header text="Movie" />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <Movie movie={movie}/>
    </div>
  );
};


export default App;