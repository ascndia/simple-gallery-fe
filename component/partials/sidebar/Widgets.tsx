import React from "react";
import useSidebarStore from "../../../store/sidebar";
import IconContainer from "./IconContainer";
import { FaStar } from "react-icons/fa";
import Widget from "./Widget";

const Widgets = () => {
  const { isOpen } = useSidebarStore();
  const className = `flex-col py-1 gap-2 flex bg-purple-700`;
  return (
    <div className={className}>
      <Widget iconProps={{ child: FaStar, size: 20 }} title="Favorite" />
      <Widget iconProps={{ child: FaStar, size: 20 }} title="Favorite" />
      <Widget iconProps={{ child: FaStar, size: 20 }} title="Favorite" />
      <Widget iconProps={{ child: FaStar, size: 20 }} title="Favorite" />
    </div>
  );
};

export default Widgets;
