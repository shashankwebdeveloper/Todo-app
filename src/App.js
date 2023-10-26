
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilter4edTodos]=useState([]);

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilter4edTodos(todos.filter(todo=>todo.completed===true))
        break;
        case 'uncompleted':
        setFilter4edTodos(todos.filter(todo=>todo.completed===false))
        break;

        default:
          setFilter4edTodos(todos)
          break;
    }
  }
  useEffect(()=>{
    filterHandler();
    console.log("hey");
  },[todos,status]);
  return (
    <div className="App">
     <h1>Shashank's Todo App</h1>
     <Form inputText={inputText}  setInputText={setInputText} setStatus={setStatus} todos={todos} setTodos={setTodos} />
     <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
