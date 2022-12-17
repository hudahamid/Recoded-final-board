// //taza
// import Card from 'react-bootstrap/Card';
// import { Route, useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import db from "../../firebase";
// import { collection, addDoc, onSnapshot,doc } from "firebase/firestore"

// // import TasksCard from "./TasksCard";
// // import ToDo from './ToDo';



// export default function Board_Form(){

//     const [title, setTitle] = useState("");
//     async function addingNotes(title) {
//     await addDoc(collection(db, "boards"), {
//         Name: title,
//         tasks: [],
//       });
//     }
//     const saveDoc = (e) => {
//         e.preventDefault();
    
//         addingNotes(title);
//       };














//     ///------------------------------------------

//     const navigate = useNavigate();
  
//         const [newBoardInput, setNewBoardInput] = useState({});
//         const [boardList, setBoardList] = useState([]);
      
//     //     useEffect(() => {
//     //       onSnapshot(collection(db, "Board"), (snapshot) => {
//     //         snapshot.docChanges().forEach((docChange) => {
//     //           if (docChange.type === "added") {
//     //             setBoardList((prevBoardList) => [
//     //               ...prevBoardList,
//     //               docChange.doc.data(),
//     //             ]);
//     //           } else if (docChange.type === "removed") {
//     //             setBoardList(
//     //                 boardList.filter((board) => board.id !== docChange.doc.id)
//     //             );
//     //           }
//     //         });
//     //       });
//     //     }, []);
    
    
//     //     const handleOnChange = (event) => {
//     //       const keyName = event.target.name;
//     //       const value = event.target.value;
//     //       setNewBoardInput((prev) => {
//     //         // Copy the previous object (state) and only change the keyName that I want
//     //         // prev is aka newMovieInput
//     //         return { ...prev, [keyName]: value };
//     //       });
//     //     };
    
        
//     //   const handleSubmit = async (event) => {
//     //     event.preventDefault();
//     //     // instead of saving new items to our state
//     //     // we will create a post request to add items to our database
//     //     console.log('newBoardInput', newBoardInput);
  
//     //     await addDoc(collection(db, "Board"), {
//     //       ...newBoardInput,
//     //     });
      
  
//     //     // await doc(collection(db, "Board2","tasks"), {
//     //     //   ...newBoardInput,
//     //     // });
//     //     // Clear the form
//     //     setNewBoardInput({
//     //       Name: "",
//     //       tasks:[],
      
//     //     });
  
//     //     // TODO: 
//     //      navigate('/Component/tasks/ToDo')
        
  
//     //   };
    
  
  
  
  
//       return (
//         <div className='board-container'>
        
//           <div className='BoardForm'>
             
//           <form className="form-todoo" style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       marginTop: "20px",   
//                   }}   
//                     onSubmit={saveDoc}   
//                       >
//            <label>Board name  : </label>
//            <input
//               type="text"
//               placeholder="Board Name"
//               name="Name"
//               value={newBoardInput.Name}
//               onChange={(e) => setTitle(e.target.value)}
//             />
            
      
//             <button type="submit" className="submit-btnn"  text={"Add new Board"}>
//               Add New board
//           </button>
     
//       </form>
//       </div>
//       <div className='cardss'>
  
      
//        {boardList.map((board) => {
//                   return (
//                          <Card.Body className='card-boards'>
  
//                               <span>{board.Name}</span>
//                               <Link to={`/board/${board.id}`} key={board.id}>
//                                </Link>
  
  
  
//                     </Card.Body>
  
  
  
  
//                   );
//                 })}
//                 </div>
       
      
        
//        </div>
  
         
          
//       );
//   }