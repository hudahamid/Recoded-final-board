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
      <Container>
        <Row>
        <Col>
        <form className="form-todo" style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                    marginLeft:"50px",
                    width: "500px", 
                }}     onSubmit={handleSubmit}   
    >
         <label>Title</label>
         <input
            type="text"
            placeholder="Task Title"
            name="title"
            value={newTaskInput.title}
            onChange={handleOnChange}
          />
          <label>Describtion</label>
            <input
            className="desc"
            type="text"
            placeholder="Describtion"
            name="description"
            value={newTaskInput.description}
            onChange={handleOnChange}
          />
              {/* <label>Due Date</label>
           <input
            type="text"
            placeholder="Due Date"
            name="due-date"
            value={newTaskInput.due-date}
            onChange={handleOnChange}
          /> */}
            <label>Assign</label>
           <input
            type="text"
            placeholder="Assign"
            name="assign"
            value={newTaskInput.assign}
            onChange={handleOnChange}
          />
           <label>Started</label>
           <input
            type="text"
            placeholder="start"
            name="start"
            value={newTaskInput.start}
            onChange={handleOnChange}
          />



        {/* <div>
            <div>
                <label>Title</label>
                <input  />
            </div>
            <div>
                <label>Body</label>
                <textarea  ></textarea>
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" min="2022-1-1" max="2022-12-31" />
            </div>
            <div>
                <label>Assign</label>
                <input  />
            </div>
        </div> */}
        <div>
        {/* <Button type="submit" text={"Add new Movie"} /> */}
            <button type="submit" className="submit-btn"  text={"Add new task"} >Add Task</button>
        </div>
    </form>
        
        </Col>
      </Row>

      <Row>
      <Col>{taskList.map((task) => {
          return (
                   <div  className="todo-card"> 
                     <Card  className="mb-2"     bg={"Secondary".toLowerCase()}  key={"Secondary"}   border="primary" style={{ width: '18rem' }}>
                      <Card.Body>
                        <Row>
                          <column>
                           <Card.Title>{task.title}</Card.Title>
                                <Link to={`/task/${task.id}`} key={task.id}>
                                      
                                </Link>
                             <TasksCard {...task} /> 
                      </column>
                      <column>  <Button variant="primary">Edit</Button> </column>
                     </Row>
                      
                      </Card.Body>
                      </Card>
                     </div>
                  );
        })}</Col>
    
    
        </Row>
    </Container>
    
    
    
    );
}

export default ToDo;