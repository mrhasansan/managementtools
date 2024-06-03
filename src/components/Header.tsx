import { TiThSmall } from "react-icons/ti";

export function Header() {
  return (
    <div className="flex items-center justify-between p-2 bg-blue-500 text-white h-12">
      <TiThSmall size={36} />
      <div className="text-xl font-bold">Task </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">Settings</button>
        <button className="p-2">Profile</button>
      </div>
    </div>
  );
}
