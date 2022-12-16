import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BoardForm from './tasks/BoardForm';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {Routes, Route} from "react-router-dom";

export default function Home(){
    
    const handleClick = () => {
        return (
            <div>  </div>
        );
        
      };

    return (
        <div className='homee'>
           <h2 className='urwork' > YOUR WORKSPACES</h2>
            
            <div className='card-home'>
                       
                      <h2>New kanban board</h2>
                      {/* <Button  onClick={handleClick}>+   </Button> */}
                      {/* <Route path="/" element={<BoardForm />}></Route>  */}
                      <Link to="/Component/tasks/BoardForm" >  ADD </Link>  
                      {/* <Link to="/Component/AddingBoard" >  ADD2 </Link>  */}
            </div>
               
             
        </div>
        
    );
}
