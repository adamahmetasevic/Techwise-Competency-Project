import React, { useState } from 'react';

interface TodoFormProps {
  onSubmit: (description: string) => void;
  initialData?: { description: string };
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialData }) => {
  const [description, setDescription] = useState(initialData ? initialData.description : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
