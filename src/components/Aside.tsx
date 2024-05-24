import { IoToday } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa6";
import { IoIosDoneAll } from "react-icons/io";

export function Aside() {
  function search(formData: FormData) {
    const query = formData.get("query");
    alert(`You searched "${query}"`);
    // Add your search functionality here
    console.log("Searching...");
  }

  return (
    <aside className="bg-gray-200 p-4 w-1/4">
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          search(new FormData(e.target as HTMLFormElement));
        }}
      >
        <input id="keyword" name="query" type="search" className=" w-full border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-gray-500 " placeholder="Search ..." />
      </form>

      <ul className="menu  lg:menu-horizontal rounded-box ">
        <li className="my-2">
          <a>
            <IoToday size={32} />
            Today
            <span className="badge badge-sm">99+</span>
          </a>
        </li>
        <li className="my-2">
          <a>
            <IoIosDoneAll size={32} />
            Complete
            <span className="badge badge-sm badge-warning">NEW</span>
          </a>
        </li>
        <li className="my-2">
          <a>
            <FaBorderAll size={32} />
            All
            <span className="badge badge-xs badge-info"></span>
          </a>
        </li>
        <li className="my-2">
          <a>
            <AiOutlineSchedule size={32} />
            Schedule
            <span className="badge badge-xs badge-info"></span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
