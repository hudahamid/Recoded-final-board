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

export default function Home(){
    
    const handleClick = () => {
        return (
            <div>
    
    
            </div>
        );
        
      };




    return (
        <div className='homee'>
        
            
           <Link to="/Component/tasks/completed"  className='link-home'>   <div className='card-home'>
                       
                       <h2>Completed work</h2>
                     
                     
 
                   
                  </div></Link>
           
               
             
        </div>
        
    );
}