import React, { useEffect } from 'react';
import './home.css';
import ReactGA from 'react-ga';



export default function Todoitem({todo, onDelete}) {
  useEffect(() => {
    ReactGA.initialize("UA-276939231-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <>
    <div className="container">
        
        <div className="body">
        <label htmlFor="">Title: {todo.title}</label>
        <label htmlFor="">Description: {todo.description}</label>
        <button className='delete' onClick={() =>{onDelete(todo)}}>Delete</button>
        </div>
        


    </div>
    </>
  )
}
