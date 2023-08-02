import React, { useState } from 'react';
import List from './List';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue.trim(), isEditing: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <List todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} onUpdate={handleUpdateTodo} />
    </div>
  );
}

export default TodoList;
