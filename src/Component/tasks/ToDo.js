import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore"
import TasksCard from "./TasksCard";
import Doing from './Doing';
import Card1 from './card-completed';

function ToDo(){
    //const [Title, setTitle] = useState("")
     
    const [newTaskInput, setNewTaskInput] = useState({});
    const [taskList, setTaskList] = useState([]);
  
    useEffect(() => {
      onSnapshot(collection(db, "ToDo"), (snapshot) => {
        snapshot.docChanges().forEach((docChange) => {
          if (docChange.type === "added") {
            setTaskList((prevTaskList) => [
              ...prevTaskList,
              docChange.doc.data(),
            ]);
          } else if (docChange.type === "removed") {
            setTaskList(
                taskList.filter((task) => task.id !== docChange.doc.id)
            );
          }
        });
      });
    }, []);


    const handleOnChange = (event) => {
      const keyName = event.target.name;
      const value = event.target.value;
      setNewTaskInput((prev) => {
        // Copy the previous object (state) and only change the keyName that I want
        // prev is aka newMovieInput
        return { ...prev, [keyName]: value };
      });
    };

    
  const handleSubmit = async (event) => {
    event.preventDefault();
    // instead of saving new items to our state
    // we will create a post request to add items to our database
    await addDoc(collection(db, "ToDo"), {
      ...newTaskInput,
    });
    // Clear the form
    setNewTaskInput({
      title: "",
      description: "",
      assign: "",
      start: "",
    });
  };

   
    return (
      <><Container>
        <div className='card1'>

          <h1>ToDo</h1>

          <div className='CNTAINER'></div>


          <form className="form-todo" style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
            onSubmit={handleSubmit}
          >
            <label>Title</label>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              value={newTaskInput.title}
              onChange={handleOnChange} />
            <label>Describtion</label>
            <input
              className="desc"
              type="text"
              placeholder="Describtion"
              name="description"
              value={newTaskInput.description}
              onChange={handleOnChange} />

            <label>Assign</label>
            <input
              type="text"
              placeholder="Assign"
              name="assign"
              value={newTaskInput.assign}
              onChange={handleOnChange} />
            <label>Started</label>
            <input
              type="text"
              placeholder="start"
              name="start"
              value={newTaskInput.start}
              onChange={handleOnChange} />

            <div>

              <button type="submit" className="submit-btn" text={"Add new task"}>Add Task</button>
            </div>


          </form>








          {taskList.map((task) => {
            return (




              <Card.Body className='card-todoo'>

                <span>{task.title}</span>
                <Link to={`/task/${task.id}`} key={task.id}>

                  <Button className='edit' variant="primary">Edit</Button>

                </Link>

                {/* { document.querySelectorAll('.edit').addEventListener('click', event => {
              const CONTAINER = document.querySelector(".CONTAINER");
                CONTAINER.innerHTML = `
                <h1>hello</h1>
                `;
              })
                } */}


              </Card.Body>




            );
          })}




        </div>





      </Container><Doing />
      
      <Card1/>
      </>
      
    

    
    
    
    
    );

}



export default ToDo;