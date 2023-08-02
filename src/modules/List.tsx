import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

interface ListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

function List({ todos, onDelete, onEdit, onUpdate }: ListProps) {
  const [updatedText, setUpdatedText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(event.target.value);
  };

  const handleUpdate = (id: number) => {
    onUpdate(id, updatedText);
    setUpdatedText('');
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.isEditing ? (
            <div>
              <input type="text" value={updatedText} onChange={handleInputChange} />
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
            </div>
          ) : (
            <div>
              <span>{todo.text}</span>
              <button onClick={() => onEdit(todo.id)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
              <Link to={`/task/${todo.id}`}>Details</Link> {/* Link to Task Details */}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
