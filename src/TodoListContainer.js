import React from 'react'
import { useState, useRef } from 'react'
import CompletedItem from './CompletedItem';
import TodoItem from './TodoItem'

export default function TodoListContainer() {

    const [todos, setTodos] = useState([]);

    const [completedItems, setCompletedItems] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const id = useRef(1)

    const handleButtonClick = () => {
        setTodos([
            {
                id: id.current,
                content: inputValue
            }, ...todos]);
        setInputValue('');
        id.current++
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleCompletedTodo = id => {
        let completed;
        todos.map(
            todo => {
                if (todo.id === id) {
                    completed = todo;
                }
            }
        )

        setCompletedItems(
            [
                completed
                ,
                ...completedItems
            ]
        )

        setTodos(todos.filter(todo => todo.id !== id));
    }


    return (


        <div >
            <div className='padding-top-left-right-20'>
                <input type="text" className="input-text " placeholder="Add New Item here (Eg. Implement Dark Mode)" value={inputValue} onChange={handleInputChange} />
                <button class="add-todo-button" type="button" onClick={handleButtonClick} >Add Todo</button>
            </div>

            <div className='todo-list' >
                <ul className='todo-list-item' >

                    {
                        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompletedTodo={handleCompletedTodo} />)
                    }
                </ul>
            </div>

            <div className='todo-list' >
                <ul className='todo-list-item' >

                    {
                        completedItems.map(completedItem => <CompletedItem key={completedItem.id} completedItem={completedItem} />)
                    }
                </ul>
            </div>

        </div>

    )
}
