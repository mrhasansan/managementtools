import { Aside } from "./components/aside.tsx";
import { Body } from "./components/body.tsx";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex">
        <Aside />
        <Body />
      </main>
    </div>
  );
}
