import './index.css';
import React from 'react';
interface TaskCardProps {
  title: string;
  dueDate?: string;  // Made dueDate optional
  completedAtDate?: string;  // Made completedDate optional
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-md">
      <p className="font-bold">{title}</p>
      {dueDate && <p className="text-sm text-gray-500">Due on: {dueDate}</p>}
      {completedAtDate && <p className="text-sm text-gray-500">Completed on: {completedAtDate}</p>}
      <p className="text-sm text-gray-500">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
