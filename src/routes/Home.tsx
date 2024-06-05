import { RootProvider } from "../state/RootProvider";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";

export function HomePage() {
  return (
    <div className="flex-1 p-4">
      <RootProvider>
        <AddTask />
        <TaskList />
      </RootProvider>
    </div>
  );
}
