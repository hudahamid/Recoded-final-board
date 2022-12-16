

import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home";
import ToDo from './Component/tasks/ToDo';
import Navbar from "./Component/Navbar"
import {Routes, Route} from "react-router-dom";
import About from "./Component/About";
import TaskCard from "./Component/tasks/TasksCard"
import BoardForm from './Component/tasks/BoardForm';
import Card1 from './Component/tasks/card-completed';
import Completed from './Component/tasks/completed';


function App() {
  return (
    <div className="App">
       <Navbar />
        <div className="container1"  id='basic_view'>
          <Routes>

            <Route path="/Home" element={<Home />}></Route>  
            <Route path="/" element={<ToDo />}></Route>    
            <Route path="/Component/tasks/ToDo" element={<ToDo />}></Route> 
            {/* <Route path="/Component/tasks/TasksCard" element={<TaskCard/>}></Route>  */}
            <Route path="/" element={<BoardForm />}></Route> 
            <Route path="/Component/tasks/BoardForm" element={<BoardForm />}></Route> 
            <Route path="/" element={<BoardForm />}></Route> 
            <Route path="/Component/tasks/completed" element={<Completed/>}></Route> 

            <Route path="/about" element={<About />}></Route>    




              <Route path="/Home" element={<Home />}></Route>  
           <Route path="/" element={<ToDo />}></Route>   
            <Route path="/Component/tasks/ToDo" element={<ToDo />}></Route> 
            
            {/* <Route path="/Component/tasks/TasksCard" element={<TaskCard/>}></Route>  */}

          </Routes>
       

        </div>

    </div>
  );
}

export default App;