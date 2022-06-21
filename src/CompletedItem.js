import React from 'react'

export default function CompletedItem({ completedItem, handleDeleteTodo, handleCompletedItemClick}) {
  return (
    <li className=" todo-item row " data-todo-id={completedItem.id} >


      <div className=" col-8 todo-content" onClick={() => { handleCompletedItemClick(completedItem.id) }}>{completedItem.content}</div>
      <div className='col-1'>


        <img src='	https://stickylist.app/img/trash-light.svg' className='trash-img' onClick={() => { handleDeleteTodo(completedItem.id) }} />


      </div>


    </li>
  )
}
