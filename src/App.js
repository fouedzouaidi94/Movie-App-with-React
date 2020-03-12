import React from "react";
import Movie from "./components/Movie";
import useSpinner from "./components/UseSpinner";
function App() {
  const [spinner]=useSpinner(<Movie/>);

  return (
    <div className="App">
      {/*<Movie></Movie>*/}
      {spinner}
    </div>
  );
}

export default App;
