import { dataTodos } from "../data/todos";
import { TodoItem } from "./Todo-item";
import { useState } from "react";

export function Body() {
  const [addToDo, setAddToDo] = useState<string>("");
  return (
    <div className="flex-1 p-4">
      <div>
        <input required type="text" value={addToDo} className=" border border-gray-50 rounded-md px-4 m-4" placeholder="Add a new to-do" onChange={(e) => setAddToDo(e.target.value)} />
        <button className=" bg-sky-500 rounded-md mx-4 px-4">Add</button>

        <ul>
          {dataTodos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
