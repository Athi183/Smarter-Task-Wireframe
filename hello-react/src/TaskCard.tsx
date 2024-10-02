import './index.css';
import React from 'react';
interface TaskCardProps {
  title: string;
  dueDate?: string;  // Made dueDate optional
  completedDate?: string;  // Made completedDate optional
  assignee: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, completedDate, assignee }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-md">
      <p className="font-bold">{title}</p>
      {dueDate && <p className="text-sm text-gray-500">Due on: {dueDate}</p>}
      {completedDate && <p className="text-sm text-gray-500">Completed on: {completedDate}</p>}
      <p className="text-sm text-gray-500">Assignee: {assignee}</p>
    </div>
  );
};

export default TaskCard;
