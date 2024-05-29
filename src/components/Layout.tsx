import { AddTask } from "./AddTask";
import { RootProvider } from "../state/RootProvider";
import { TaskList } from "../routes/TaskList";

export function Layout() {
  return (
    <div className="flex-1 p-4">
      {/* <Form /> */}
      <RootProvider>
        {" "}
        <AddTask />
        <TaskList />
      </RootProvider>
    </div>
  );
}
