import React from 'react';

const TodoItem = ({ task, removeTodo }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      <span>{task}</span>
      <button
        onClick={removeTodo}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
