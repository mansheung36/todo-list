import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoButton() {

    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        setTodos([inputValue, ...todos]);
        setInputValue('');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }



    return (


        <div class="padding-top-left-right-20">
            <input type="text" className="input-text " placeholder="Add New Item here (Eg. Implement Dark Mode)" value={inputValue} onChange={handleInputChange} />
            <button class="add-todo-button" type="button" onClick={handleButtonClick} >Add Todo</button>
            {
                todos.map((todo, index) => <TodoItem key={index} content={todo} />)
            }
        </div>

    )
}
