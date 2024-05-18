import { useState } from "react";

export default function ShowHide() {
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleClick() {
    setShowMore(!showMore);
  }
  return (
    <div className=" p-4 rounded-lg">
      <button className=" bg-slate-500 rounded-lg w-auto px-4" onClick={handleClick}>
        {showMore ? "Hide Details" : "Show Details"}
      </button>
      {showMore && <p> tugas detail anda adaah ....</p>}
    </div>
  );
}
