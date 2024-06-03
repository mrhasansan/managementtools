import { LeftSide } from "./components/LeftSide";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className=" flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className=" flex flex-grow">
        <LeftSide />
        <main className=" flex-grow p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
