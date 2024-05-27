export function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <nav className="space-y-2">
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          My Day
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Important
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Planned
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Assigned to me
        </a>
        <a href="#" className="block p-2 rounded hover:bg-blue-500 hover:text-white">
          Tasks
        </a>
        <button className="block p-2 rounded bg-blue-500 text-white">New List</button>
      </nav>
    </div>
  );
}
