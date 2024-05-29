import { TiThSmall } from "react-icons/ti";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center justify-between p-2 bg-blue-500 text-white h-12">
      <TiThSmall />
      <h1>
        <Link to="/" className="text-xl font-bold">
          Task
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="Search" className="p-2 rounded" />
      <div className="flex items-center space-x-4">
        <button className="p-2">Settings</button>
        <button className="p-2">Profile</button>
      </div>
    </div>
  );
}
