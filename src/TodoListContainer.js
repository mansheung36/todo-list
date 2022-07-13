import React from 'react'
import { useState, useRef } from 'react'
import CompletedItem from './CompletedItem';
import TodoItem from './TodoItem'

export default function TodoListContainer() {

    const [todos, setTodos] = useState([]);

    const [completedItems, setCompletedItems] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const [showEmptyStatement, setShowEmptyStatement] = useState(false)

    const [showCompletedItems, setShowCompletedItems] = useState(false)

    const id = useRef(1)

    const handleButtonClick = () => {
        addItem();
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
                completed,
                ...completedItems,
            ]
        )

        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleCompletedItemClick = id => {
        let backwardItem;
        completedItems.map(
            completedItem => {
                if (completedItem.id === id) {
                    backwardItem = completedItem;
                }
            }
        )

        setTodos(
            [
                backwardItem,
                ...todos,
            ]
        )

        setCompletedItems(completedItems.filter(completedItem => completedItem.id !== id));

    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            addItem();
        };
    }

    function addItem() {
        if (inputValue.length === 0) {
            setShowEmptyStatement(true);
            return;
        }

        setShowEmptyStatement(false);
        setTodos([
            {
                id: id.current,
                content: inputValue
            }, ...todos]);
        setInputValue('');
        id.current++;
    }

    const handleShowCompletedItem = () => {
        setShowCompletedItems(!showCompletedItems)
    }

    return (


        <div >
            <div className='padding-top-left-right-20'>
                <input type="text" className="input-text " placeholder="Add New Item here (Eg. Implement Dark Mode)" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <button class="add-todo-button" type="button" onClick={handleButtonClick} >Add Todo</button>
            </div>

            <div className='empty-todo-strings'>
                {(showEmptyStatement) &&
                    <div>
                        Please don't add nothing to your list. Try adding something. (Pro-Tip: If you still want to add nothing, use an empty space)
                    </div>
                }
            </div>

            <div className='todo-list' >
                <ul className='todo-list-item' >

                    {
                        todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompletedTodo={handleCompletedTodo} />)
                    }
                </ul>
            </div>

            <div className='margin-20'>
                <div className='completed-todos-title'>
                    <span>COMPLETED TODOS()</span>
                    <button onClick={handleShowCompletedItem}>{ (showCompletedItems) ? 'hide' : 'show'  }</button>
                </div>
            
                { showCompletedItems &&
                    <ul className='todo-list-item' >

                    {
                        completedItems.map(completedItem => <CompletedItem key={completedItem.id} completedItem={completedItem} handleCompletedItemClick={handleCompletedItemClick} />)
                    }
                </ul>
                }
            </div>

            {(todos.length === 0 && completedItems.length === 0) &&

                < div className='margin-20' >

                    <div className='welcome-block'>
                        Welcome to your StickyList.<br />
                        <br />
                        You have no items on the list. Add some items to your sticky list and stay focussed.<br />
                    </div>

                    <div className='text-align-center'>
                        <img className='workdesk-img' src='	https://stickylist.app/img/workdesk-dark.png'></img>
                    </div>

                </div >
            }

        </div>

    )
}
