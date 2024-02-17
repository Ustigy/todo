import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
// console.log(todos);
// console.log(Array.isArray(todos));

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  // console.log(elements);

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;