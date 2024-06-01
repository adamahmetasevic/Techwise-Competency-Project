import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButtons';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; description: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (description: string) => {
    setTodos([...todos, { id: Date.now(), description, completed: false }]);
  };

  const editTodo = (id: number, description: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, description } : todo));
  };

  const completeTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'uncompleted':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={getFilteredTodos()}
        onEdit={(id) => editTodo(id, prompt('New description', '') || '')}
        onComplete={completeTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
