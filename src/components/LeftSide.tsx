import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

import { HiClipboardList, HiClipboard, HiClipboardCheck, HiOutlineChartBar, HiChartPie, HiQrcode } from "react-icons/hi";

export function LeftSide() {
  return (
    <div className="w-1/4 bg-white border-r">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiChartPie}>
              <Link to="/"> Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiQrcode}>
              <Link to="/about"> About</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiClipboardList}></Sidebar.Item>
            <Sidebar.Item href="/plan" icon={HiClipboard} label="3" labelColor="dark">
              <Link to="/plan"> Planned</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiOutlineChartBar} label="3">
              <Link to="/progress"> In Progress</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiClipboardCheck} label="4">
              <Link to="/done"> Done</Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
