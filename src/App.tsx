import { Aside } from "./components/Aside";
import { Body } from "./components/Body";

export function App() {
  return (
    <div className="flex h-screen">
      <main className="flex-1 flex">
        <Aside />
        <Body />
      </main>
    </div>
  );
}
