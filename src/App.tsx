import { LeftSide } from "./components/LeftSide";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main className="grid grid-cols-[1fr,3fr] gap-4 p-4 flex-grow">
        <LeftSide />
        <div>
          <Outlet context={{ isModalOpen, setIsModalOpen }} />
        </div>
      </main>
    </div>
  );
}
