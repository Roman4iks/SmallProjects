import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { taskId } = useParams<{ taskId: string }>();

  const taskText = 'Your Task Text';

  return (
    <div>
      <h2>Task Details</h2>
      <p>Task ID: {taskId}</p>
      <p>Task Text: {taskText}</p>
    </div>
  );
}

export default TaskDetails;
