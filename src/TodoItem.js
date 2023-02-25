import React from "react";

export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleCompletedTodo,
}) {
  return (
    <li className=" todo-item row " data-todo-id={todo.id}>
      <div
        className=" col-8 todo-content"
        onClick={() => {
          handleCompletedTodo(todo.id);
        }}
      >
        {todo.content}
      </div>
      <div className="col-1">
        <img
          src="	https://stickylist.app/img/trash-light.svg"
          alt=""
          className="trash-img"
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        />
      </div>
    </li>
  );
}
