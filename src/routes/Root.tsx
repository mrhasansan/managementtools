import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <div className=" flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
