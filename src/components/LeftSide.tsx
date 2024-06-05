import { Sidebar } from "flowbite-react";

import { HiClipboardList, HiClipboard, HiClipboardCheck, HiOutlineChartBar, HiChartPie, HiQrcode } from "react-icons/hi";

export function LeftSide() {
  return (
    <div className="w-1/4 bg-white border-r">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/about" icon={HiQrcode}>
              About
            </Sidebar.Item>
            <Sidebar.Item href="/tasks" icon={HiClipboardList}>
              All Task
            </Sidebar.Item>
            <Sidebar.Item href="/plan" icon={HiClipboard} label="3" labelColor="dark">
              Planned
            </Sidebar.Item>
            <Sidebar.Item href="/progress" icon={HiOutlineChartBar} label="3">
              In Progress
            </Sidebar.Item>
            <Sidebar.Item href="/done" icon={HiClipboardCheck} label="4">
              Done
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
