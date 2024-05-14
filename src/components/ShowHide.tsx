import { useState } from "react";

export default function ShowHide() {
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleClick() {
    setShowMore(!showMore);
  }
  return (
    <div>
      <button onClick={handleClick}>{showMore ? "Hide" : "Show"}</button>
      {showMore && <p> tugas detail anda aladah ....</p>}
    </div>
  );
}
