import { TaskItem } from "./TaskItem";
import { useContext, useEffect } from "react";
import { StateContext } from "../state/RootProvider";
import { useSearchParams } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { TextInput } from "flowbite-react";

export function TaskList() {
  const { tasks } = useContext(StateContext);

  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q") || "";

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: event.target.value });
  };

  const filteredTasks = tasks.filter((task) => {
    const query = q.toLowerCase();
    const title = task.title?.toLowerCase() || "";
    const description = task.description.toLowerCase() || "";
    const status = task.status.toLowerCase() || "";

    return title.includes(query) || description.includes(query) || status.includes(query);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className=" bg-white rounded-lg p-6 my-4">
      <TextInput id="search" type="text" icon={HiOutlineSearch} placeholder="Search" value={q} onChange={handleSearchChange} className="mb-6" />
      <h2 className="text-2xl font-bold mb-6">Tasks</h2>
      <ul className="space-y-3 ">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
