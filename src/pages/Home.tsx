import { AddTask } from "../components/AddTask";
import { RootProvider } from "../state/RootProvider";
import { TaskList } from "../components/TaskList";

export function Home() {
  return (
    <div className="flex-1 p-4">
      <RootProvider>
        <AddTask />
        <TaskList />
      </RootProvider>
    </div>
  );
}
