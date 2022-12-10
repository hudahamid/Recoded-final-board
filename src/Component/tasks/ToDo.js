
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore"

function ToDo(){
    //const [Title, setTitle] = useState("")
     
    const [newTask, setNewTask] = useState({});
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

   
    return (
    <form  style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        width: "500px",
      }}      
    >
        <div>
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
        </div>
        <div>
            <button type="submit" >Add Task</button>
        </div>
    </form>);
}

export default ToDo;