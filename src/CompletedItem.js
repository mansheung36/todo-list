import React from 'react'

export default function CompletedItem({ completedItem, todo, handleDeleteTodo, handleButtonClick}) {
  return (
    <li className=" todo-item row " data-todo-id={completedItem.id} >


      <div className=" col-8 todo-content" >{completedItem.content}</div>
      <div className='col-1'>


        <img src='	https://stickylist.app/img/trash-light.svg' className='trash-img' onClick={() => { handleDeleteTodo(todo.id) }} />


      </div>


    </li>
  )
}
