import React from 'react';

const Todo = (props) => {
    let todo = props.todo;
    let todos = props.todos;
    let setTodos = props.setTodos;

    //Deletes the clicked todo with the given ID to be filtered out
    const deleteHandler = () => {
        setTodos(
            todos.filter(el => el.id !== todo.id)
        );
    }

    const completeHandler = (e) => {
        setTodos(
            todos.map(
                (item) => {
                    if(item.id === todo.id){
                        return {
                            ...item, 
                            completed: !item.completed,
                        }
                    }
                    return item;
                }
            )
        )
    }

    return(
        <li className={`todo ${todo.completed ? "completed" : ""}`}>
            <h3 className='todo-item'>
                {todo.text}
            </h3>
            <button 
                className='todo-check'
                onClick={completeHandler}    
            >
                &#x2713;
            </button>
            <button 
                className='todo-remove'
                onClick={deleteHandler}
            >
                X
            </button>
        </li>
    );
}

export default Todo;