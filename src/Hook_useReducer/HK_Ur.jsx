import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 4;

const initialTodos = [
  { id: 0, title: 'Buy milk',author:'abc', done: true },
  { id: 1, title: 'Eat tacos',author:'xyz', done: false },
  { id: 2, title: 'Brew tea',author:'mno', done: false },
  { id: 3, title: 'Serve tea',author:'pqr', done: false },
];

function DataHook() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title,author) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        author: author,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default DataHook;
