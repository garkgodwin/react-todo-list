import React from 'react';
import Todo from './ComponentsTodoList/Todo';

const Display = (props) => {

    function setMessage(){
        let message = "";
        switch(props.status){
            case 'completed':
                message = 'You have no completed todo.';
                break;
            case 'uncompleted':
                message = 'You have no uncompleted todo.';
                break;
            default:
                message = "You have nothing todo.";
                break;
        }
        return message;
    }
    if(props.filtered.length === 0){
        return(
            <div className='todo-list-empty'>
                <h2 
                    onClick={() => document.getElementById('input-box').focus()}
                >
                {setMessage()}
                </h2>
            </div>
        );
    }
    else{
        return(
            <ul className="todo-list">
                {
                    props.filtered.map(todo => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        todos={props.todos}
                        setTodos={props.setTodos}   
                    />
                ))}
            </ul>
        );
    }
}

const TodoList = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;
    const status = props.status;

    const filterHandler = () => {
      if(status === "all"){
        return todos;
      }
      else if(status === "completed"){
        return (todos.filter(todo => todo.completed === true));
      }
      else if(status === "uncompleted"){
        return (todos.filter(todo => todo.completed === false));
      }
      else{
        return todos;
      }
    }
    const filtered = filterHandler();
    return(
        <div className="todo-container">
            <Display 
                todos={todos}
                filtered={filtered}
                status={status} 
                setTodos={setTodos}
            />
        </div>
    )
}

export default TodoList;