import { type Task } from "../data/tasks";
import { useDeleteTodohook } from "../hooks/useDeleteTaskHook";

export function TaskItem({ task }: { task: Task }) {
  const deleteTask = useDeleteTodohook();
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <ul>
        <li>{task.title}</li>
        <p>Status : {task.status}</p>
        <p>Description : {task.description}</p>
      </ul>
      <button onClick={handleDelete} className="btn">
        delete
      </button>
    </div>
  );
}
