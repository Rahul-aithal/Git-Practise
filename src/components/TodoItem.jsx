import React, { useState } from 'react';

const TodoItem = ({ task, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(newTask);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded w-full mr-2"
        />
      ) : (
        <span>{task}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={removeTodo}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
