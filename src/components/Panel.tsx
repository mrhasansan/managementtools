import { ReactNode, useState } from "react";

type PanelProps = {
  title: string;
  children: ReactNode;
};

function Panel({ title, children }: PanelProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="mx-4 bg-sky-400 rounded-md px-3" onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </>
  );
}

export default Panel;
