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

function CopmletedTasks(){
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
        <Row className='card1'>
        <Col>
        <h1>Copmleted Tasks</h1>

       
    {taskList.map((task) => {
          return (
                 


                    
                      <Card.Body className='card-todoo'>
                      
                           <span>{task.title}</span>
                                <Link to={`/task/${task.id}`} key={task.id}>
                                      <Button className='edit' variant="primary">Edit</Button>  
                                </Link>
                  
                      </Card.Body>
                  
                  
                  );
        })}
        </Col>
      </Row>





    </Container>

    
    
    
    
    );

}
export default CopmletedTasks;