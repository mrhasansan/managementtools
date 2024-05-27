import { Sidebar } from "./components/Sidebar";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { dataTasks } from "./data/tasks";

export function App() {
  return (
    <div className=" flex min-h-screen flex-col bg-gray-100">
      <Header />

      <div className=" flex flex-grow">
        <Sidebar />
        <Body />
        <TaskList tasks={dataTasks} />
      </div>
    </div>
  );
}
