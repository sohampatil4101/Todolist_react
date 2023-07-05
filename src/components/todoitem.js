import React from 'react'
import './home.css';


export default function todoitem({todo, onDelete}) {
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
