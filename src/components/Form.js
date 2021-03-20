import React from 'react';


//cannot add if existing
function isExisting(todos, inputText){
    let exists = false;
    todos.forEach((todo) => {
        if(todo.text === inputText){
            exists = true;
        }
    });
    return exists;
}

const Form = (props) => {
    let inputText = props.inputText;
    let setInputText = props.setInputText;
    let todos = props.todos;
    let setTodos = props.setTodos;
    let setStatus = props.setStatus;

    const myPlaceHolder = "Type your todo here...";

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTextHandler = (e) => {
        e.preventDefault();
        if(inputText === ''){
            alert('Please do not leave the field empty.')
            return;
        }
        if(isExisting(todos, inputText)){
            alert('You cannot add an existing todo.');
            return;
        }
        setTodos(
            [
                ...todos, {
                    text: inputText,
                    completed: false,
                    id: Math.random() * 1000/100,
                }
            ]
        );
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input 
                id="input-box"
                type='text' 
                className='todo-input'
                onChange={inputTextHandler}
                value={inputText}
                placeholder={myPlaceHolder}
                />
            <button 
                type='submit' 
                className='todo-button'
                onClick={submitTextHandler}>
                <span>+</span>
            </button>
            <div className='select'>
                <select 
                    name='todos' 
                    className='filter-todo'
                    onChange={statusHandler}    
                >
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;