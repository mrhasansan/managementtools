import Aside from "./components/Aside";
import Body from "./components/Body";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex">
        <Aside />
        <Body />
      </main>
    </div>
  );
}

export default App;
