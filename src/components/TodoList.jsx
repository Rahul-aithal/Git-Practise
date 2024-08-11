import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo}
          removeTodo={() => removeTodo(index)}
          editTodo={(newTask) => editTodo(index, newTask)}
        />
      ))}
    </div>
  );
};

export default TodoList;
