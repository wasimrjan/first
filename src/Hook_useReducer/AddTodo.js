import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        setAuthor('');
        onAddTodo(title,author);
      }}>Add</button>
    </>
  )
}
