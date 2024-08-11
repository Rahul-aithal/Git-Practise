import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} task={todo} removeTodo={() => removeTodo(index)} />
      ))}
    </div>
  );
};

export default TodoList;
