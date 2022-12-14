import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BoardForm from './tasks/BoardForm';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {Routes, Route} from "react-router-dom";

export default function Home(){
    
    const handleClick = () => {
        return (
            <div>
              {/* <Routes>
                
                       
                        <Route path="/Component/tasks/BoardForm" element={<BoardForm />}></Route>    
                        <Route path="/Component/tasks/BoardForm" element={<BoardForm />}></Route> 
                    


</Routes> */}


{/*                 
                <Link to="/" className="site-title">Empy Task</Link>
    
                <ul>
                   
                    <Link to="/Component/tasks/BoardForm" elements={<BoardForm/>}>BoardForm  +</Link>
    
                    
                </ul> */}
    
            </div>
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

                  
                 </div>
               
             
        </div>
        
    );
}

{/* <Link to="./tasks/boardForm"  ><BoardForm/></Link> */}// 