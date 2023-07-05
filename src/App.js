import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home'

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  function onDelete(todo){


    setTodos(todos.filter((e) =>{
      return e!== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description) =>{
    let sno;
    if(todos.length === 0){
       sno = 0
    }
    else{
       sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setTodos([...todos, myTodo]);

  }
  
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));      
  }, [todos])

  return (<>
  <Home todo = {todos} onDelete = {onDelete} addTodo = {addTodo}/>
  </>
  );
}

export default App;
