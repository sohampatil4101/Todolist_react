import React, { useState } from 'react';
import './home.css';
import Todoitem from './todoitem';



export default function Home(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function submit(e){
    e.preventDefault();
    if(!title || !description){
      alert("Title or description cannot be blank")
    }
    else{
      props.addTodo(title, description);
      setTitle("");
      setDescription("");
    }

  }
  return (
    <>
    <div className="container">
      <div className="heading">
        <h3>Add Todo's Here</h3>      
      </div>
      <div className="content">
      <form onSubmit={submit}>
        <div className="form">
          <label htmlFor="">Title</label>  
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        </div>        
        <div className="form">
          <label htmlFor="">Description</label>  
          <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        </div>  
        <button>Submit</button>      

      </form>
      
      </div>

      <div className="list">
      <div className="head">
        <h4>Todo List</h4>
        <hr />
        </div>
        {
        props.todo.length===0?"Sorry no Todolist":
        props.todo.map((todo) =>{
          return <Todoitem key={props.todo.sno} todo = {todo} onDelete = {props.onDelete}/>
        })
      }
        
      </div>



    </div>    
    </>
  )
}
