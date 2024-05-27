export type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  dueDate: Date;
};

export const dataTasks: Task[] = [
  {
    id: 1,
    title: "Morning Exercise",
    description: "Go for a 30-minute run in the park.",
    status: "in progress",
    createdAt: new Date("2024-05-15T06:00:00Z"),
    dueDate: new Date("2024-05-15T07:00:00Z"),
  },

  {
    id: 2,
    title: "Breakfast",
    description: "Prepare and eat a healthy breakfast.",
    status: "not started",
    createdAt: new Date("2024-05-15T07:00:00Z"),
    dueDate: new Date("2024-05-15T08:00:00Z"),
  },
  {
    id: 3,
    title: "Work on Project",
    description: "Spend two hours working on the React project.",
    status: "done",
    createdAt: new Date("2024-05-15T09:00:00Z"),
    dueDate: new Date("2024-05-15T11:00:00Z"),
  },
];
