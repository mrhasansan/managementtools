import { useState } from "react";
import { type Todo } from "../data/todos";

export function TodoItem({ todo }: { todo: Todo }) {
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <li>{todo.title}</li>
      <button className=" bg-slate-500 rounded-lg w-auto px-4" onClick={handleClick}>
        {showMore ? "Hide Details" : "Show Details"}
      </button>
      {showMore && <p>{todo.description}</p>}
    </div>
  );
}
