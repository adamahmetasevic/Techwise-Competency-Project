import React from 'react';

interface TodoItemProps {
  id: number;
  description: string;
  completed: boolean;
  onEdit: (id: number) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description, completed, onEdit, onComplete, onDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => onComplete(id)} />
      <span>{description}</span>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
