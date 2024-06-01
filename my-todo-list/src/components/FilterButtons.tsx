import React from 'react';

interface FilterButtonsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div>
      <button
        onClick={() => onFilterChange('all')}
        disabled={currentFilter === 'all'}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        disabled={currentFilter === 'completed'}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange('uncompleted')}
        disabled={currentFilter === 'uncompleted'}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default FilterButtons;
