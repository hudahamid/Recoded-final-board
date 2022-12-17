// import React, { useEffect, useState } from "react";
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import db from "../../firebase";

// import Container from 'react-bootstrap/Container';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import TasksCard from "./TasksCard";
// import Doing from './Doing';
// import Card1 from './card-completed';



// export default function Board_Form(props) {
//     async function addingNotes(title, description, dueDate, assign, completed) {
//       await addDoc(collection(db, `board/${props.boardId}/tasks`), {
//         title: title,
//         description: description,
//         dueDate: dueDate,
//        assign: assign,
//         completed: completed,
//       });
//     }
  
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState(null);
//     const [dueDate, setDueDate] = useState(null);
//     const [assign, setAssign] = useState(null);
//     const [completed, setCompleted] = useState(null);
  
//     const saveDoc = (e) => {
//       e.preventDefault();
  
//       addingNotes(title, description, dueDate, assign, completed);
//     };
//     return(<>
//         <Container>
//             <div className='card1'>

//               <h1>ToDo</h1>

//               <div className='CNTAINER'></div>


//               <form className="form-todo" style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginTop: "20px",
//               }}
//                 onSubmit={saveDoc}
//               >
//                 <label>Title</label>
//                 <input
//                   type="text"
//                   placeholder="Task Title"
//                    name="title"
//                 //   value={newTaskInput.title}
//                   onChange={(e) => setTitle(e.target.value)}/>
                  
//                 <label>Describtion</label>
//                 <input
//                   className="desc"
//                   type="text"
//                   placeholder="Describtion"
//                   name="description"
//                   value={newTaskInput.description}
//                   onChange={(e) => setDescription(e.target.value)} />

//                     <label>DueDate</label>
//                   <input
//                   type="text"
//                   placeholder="deadline"
//                   name="dueDate"
//                 //   value={newTaskInput.assign}
//                   onChange={(e) => setDueDate(e.target.value)} />

//                 <label>Assign</label>
//                 <input
//                   type="text"
//                   placeholder="Assign"
//                   name="assign"
//                 //   value={newTaskInput.assign}
//                   onChange={(e) => setAssign(e.target.value)} />
//                 <label>Completed</label>
//                 <input
//                   type="text"
//                   placeholder="false"
//                   name="completed"
//                   value={newTaskInput.start}
//                   onChange={(e) => setCompleted(e.target.value)}/>

//                 <div>

//                   <button type="submit" className="submit-btn" text={"Add new task"}>Add Task</button>
//                 </div>


//               </form>








//               {taskList.map((task) => {
//                 return (
//                        <Card.Body className='card-todoo'>

//                             <span>{task.title}</span>
//                             <Link to={`/task/${task.id}`} key={task.id}>

//                               <Button className='edit' variant="primary">Edit</Button>

//                             </Link>

//                     {/* { document.querySelectorAll('.edit').addEventListener('click', event => {
//                   const CONTAINER = document.querySelector(".CONTAINER");
//                     CONTAINER.innerHTML = `
//                     <h1>hello</h1>
//                     `;
//                   })
//                     } */}


//                   </Card.Body>




//                 );
//               })}




//             </div>





//           </Container>
//           <Doing />
//           <Card1/>
          
          
//           </>

    
    
    
    
//     );

// }

