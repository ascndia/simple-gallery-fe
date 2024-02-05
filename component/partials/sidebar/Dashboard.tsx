import React from "react";
import useSidebarStore from "../../../store/sidebar";
import DashboardOpen from "./DashboardOpen";
import { MdDashboard } from "react-icons/md";
import IconContainer from "./IconContainer";

const Dashboard = () => {
  const { isOpen } = useSidebarStore();
  return (
    <div className={`py-1 z-10${isOpen ? "bg-yellow-600" : "bg-green-700"}`}>
      {isOpen ? (
        <DashboardOpen />
      ) : (
        <IconContainer child={MdDashboard}></IconContainer>
      )}
    </div>
  );
};

export default Dashboard;
