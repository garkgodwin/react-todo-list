import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';



function App() {
  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");



  //USE EFFECTS
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }
      else{
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    }
    getLocalTodos();
  }, []);
  useEffect(() =>{
    const saveToLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    saveToLocalTodos();
  }, [todos]);
  
  document.title = "Gark's Todo";
  return (
    <div className="App">
      <header>
        <h1>Gark Godwin Todo</h1>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos} 
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        status={status}
      />
    </div>
  );
}

export default App;
