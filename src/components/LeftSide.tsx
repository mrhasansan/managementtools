import { Sidebar } from "flowbite-react";

import { HiClipboardList, HiClipboard, HiClipboardCheck, HiOutlineChartBar, HiChartPie, HiSearch, HiPlusSm } from "react-icons/hi";

export function LeftSide() {
  return (
    <div className="w-1/4 bg-white border-r">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiSearch}>
              Search
            </Sidebar.Item>

            <Sidebar.Item href="/" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiClipboardList}>
              All Task
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiClipboard} label="3" labelColor="dark">
              Planned
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineChartBar} label="3">
              In Progress
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiClipboardCheck} label="4">
              Done
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiPlusSm}>
              New Task
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
