
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

export default function BoardForm(){
    
    const handleClick = () => {
      
         
        
      };
      const [newBoardInput, setNewBoardInput] = useState({});
      const [boardList, setBoardList] = useState([]);
    
      useEffect(() => {
        onSnapshot(collection(db, "ToDo"), (snapshot) => {
          snapshot.docChanges().forEach((docChange) => {
            if (docChange.type === "added") {
              setBoardList((prevBoardList) => [
                ...prevBoardList,
                docChange.doc.data(),
              ]);
            } else if (docChange.type === "removed") {
              setBoardList(
                  boardList.filter((board) => board.id !== docChange.doc.id)
              );
            }
          });
        });
      }, []);
  
  
      const handleOnChange = (event) => {
        const keyName = event.target.name;
        const value = event.target.value;
        setNewBoardInput((prev) => {
          // Copy the previous object (state) and only change the keyName that I want
          // prev is aka newMovieInput
          return { ...prev, [keyName]: value };
        });
      };
  
      
    const handleSubmit = async (event) => {
      event.preventDefault();
      // instead of saving new items to our state
      // we will create a post request to add items to our database
      await addDoc(collection(db, "Board"), {
        ...newBoardInput,
      });
      // Clear the form
      setNewBoardInput({
        Name: "",
       
      });
    };
  




    return (
        <div className='BoardForm'>
           
        <form className="form-todo" style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",   
                }}   
                  onSubmit={handleSubmit}   
                    >
         <label>Board name</label>
         <input
            type="text"
            placeholder="Board Name"
            name="Name"
            value={newBoardInput.Name}
            onChange={handleOnChange}
          />
          
        <div>
        <Link to="/Component/tasks/ToDo" >     <button type="submit" className="submit-btn"  text={"Add new Board"}  Link="/Component/tasks/ToDo">Add New board
        </button></Link>
         
        </div>

   
    </form>
             
        </div>
        
    );
}