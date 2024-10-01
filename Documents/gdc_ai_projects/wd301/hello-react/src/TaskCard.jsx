import PropTypes from 'prop-types';
import './index.css';

const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-md">
      <p className="font-bold">{props.title}</p>
      {props.dueDate && <p className="text-sm text-gray-500">Due on: {props.dueDate}</p>}
      {props.completedDate && <p className="text-sm text-gray-500">Completed on: {props.completedDate}</p>}
      <p className="text-sm text-gray-500">Assignee: {props.assignee}</p>
    </div>
  );
};
TaskCard.propTypes = {
  title: PropTypes.string.isRequired,  // title should be a string and is required
  dueDate: PropTypes.string.isRequired, // dueDate should be a string and is required
  completedDate: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired // assignee should be a string and is required
};
export default TaskCard;
