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
      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="bg-stone-50 rounded-lg p-2 ">
          <IoToday size={32} />
          <p>Today</p>
        </div>
        <div className="bg-stone-50 rounded-lg p-2 ">
          <AiOutlineSchedule size={32} />
          <p>Scheduled</p>
        </div>
        <div className="bg-stone-50 rounded-lg p-2 ">
          <FaBorderAll size={32} />
          <p>All</p>
        </div>
        <div className="bg-stone-50 rounded-lg p-2 ">
          <IoIosDoneAll size={32} />
          <p>Complete</p>
        </div>
      </div>
    </aside>
  );
}
