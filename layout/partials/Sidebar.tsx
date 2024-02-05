import React from "react";
import useSidebarStore from "../../store/sidebar";
import Dashboard from "../../component/partials/sidebar/Dashboard";
import Widgets from "../../component/partials/sidebar/Widgets";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <aside
      style={{ transition: "0.8s" }}
      className={`${isOpen ? "w-72" : "w-12"}  h-screen bg-blue-900`}
    >
      <div className="flex flex-col w-full">
        <Dashboard />
        <hr />
        <Widgets />
        <hr />
      </div>
    </aside>
  );
};

export default Sidebar;
