import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className=" flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className=" flex flex-grow">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}
