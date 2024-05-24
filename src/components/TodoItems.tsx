import { useState } from "react";
import { type Todo } from "../data/todos";

export function TodoItem({ todo }: { todo: Todo }) {
  const [showMore, setShowMore] = useState<boolean>(false);
  function handleClick() {
    setShowMore(!showMore);
  }
  return (
    <div>
      <ul>
        <li>{todo.title}</li>
        <button className=" btn rounded-lg w-auto px-4 " onClick={handleClick}>
          {showMore ? "Hide" : "Show Details Todo"}
        </button>
        {showMore && <p>{todo.description}</p>}
        <p>Status : {todo.status}</p>
        <button className="btn rounded-lg  px-4 m-4 ">Edit</button>
        <button className=" btn rounded-lg px-4 m-4">Delete</button>
      </ul>
    </div>
  );
}
