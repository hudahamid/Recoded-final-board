
import React from "react";
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>   
            <Route path="/about" element={<About />}></Route>   

          </Routes>

        </div>
    
    </div>
  );
}

export default App;
