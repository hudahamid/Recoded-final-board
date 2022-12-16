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
            
           <Link to="/Component/tasks/BoardForm"  className='link-home'>   <div className='card-home'>
                       

                       <h2> Kanban Board</h2>
                     
                     
 
                   
                  </div></Link>
           

               
             
        </div>
        
    );
}
