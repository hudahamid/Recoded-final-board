import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Home(){
    return (
        <div>
            <h1> YOUR WORKSPACES</h1>
            
            <Card.Body className='card-todoo' >
                      
                      <span>New kanban board</span>
                           {/* <Link to={`/task/${task.id}`} key={task.id}>
                                 <Button >Edit</Button>  
                           </Link>
              */}
                 </Card.Body>
             
             
        </div>
        
    );
}