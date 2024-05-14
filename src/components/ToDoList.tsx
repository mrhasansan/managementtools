import { useState } from "react";

type ToDoItems = {
  id: number;
  nameToDo: string;
};

let initialToDo: ToDoItems[] = [
  {
    id: 1,
    nameToDo: "learning",
  },
  {
    id: 2,
    nameToDo: "jogging",
  },
  {
    id: 3,
    nameToDo: "sleeping",
  },
];
let nexId = 4;
function ToDoList() {
  const [nameToDo, setNameToDo] = useState<string>("");
  const [listTodo, setListToDo] = useState<ToDoItems[]>(initialToDo);
  const [showMore, setShowMore] = useState<boolean>(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="space-x-2 ">
      <input required type="text" value={nameToDo} className=" border border-gray-50 rounded-md px-4 m-4" placeholder="Add a new to-do" onChange={(e) => setNameToDo(e.target.value)} />
      <button
        className=" bg-sky-500 rounded-md mx-4 px-4"
        onClick={() => {
          setListToDo([...listTodo, { id: nexId++, nameToDo }]);
        }}
      >
        Add
      </button>
      <ul className=" list-disc list-inside  space-y-2">
        {listTodo.map((nameToDo) => (
          <li key={nameToDo.id}>
            {nameToDo.nameToDo}
            <button onClick={() => {}} className="mx-4 bg-sky-400 rounded-md px-3">
              {" "}
              delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleShowMore}>{showMore ? "Hide" : "Show"} details</button>
      {showMore && <p>"Detal tugas anda adalah"</p>}
    </div>
  );
}

export default ToDoList;
