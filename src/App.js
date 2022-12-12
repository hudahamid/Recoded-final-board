

import logo from './logo.svg';
import './App.css';
import ToDo from './Component/tasks/ToDo';
import Doing from './Component/tasks/Doing';
import Navbar from "./Component/Navbar"
import {Routes, Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import TaskCard from "./Component/tasks/TasksCard"

function App() {
  return (
    <div className="App">
       <Navbar />
        <div className="container"  id='basic_view'>
          <Routes>

            <Route path="/Home" element={<Home />}></Route>  
            <Route path="/" element={<ToDo />}></Route>    
            <Route path="/Component/tasks/ToDo" element={<ToDo />}></Route> 
            {/* <Route path="/Component/tasks/TasksCard" element={<TaskCard/>}></Route>  */}


            <Route path="/about" element={<About />}></Route>    */}


              <Route path="/Home" element={<Home />}></Route>  
           <Route path="/" element={<ToDo />}></Route>   
            <Route path="/Component/tasks/ToDo" element={<ToDo />}></Route> 
            {/* <Route path="/Component/tasks/TasksCard" element={<TaskCard/>}></Route>  */}

          </Routes>
          <Doing />

        </div>

      {/* <header className="App-header">
       <ToDo/> 
    
      </header> */}
    </div>
  );
}

export default App;