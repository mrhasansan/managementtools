import { RootProvider } from "../state/RootProvider";
import { TaskList } from "../components/TaskList";

export function HomePage() {
  return (
    <div className="flex-1 p-4">
      <RootProvider>
        <TaskList />
      </RootProvider>
    </div>
  );
}
