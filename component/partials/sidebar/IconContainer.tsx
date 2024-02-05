import React, { ReactNode, useState } from "react";
import { IconType } from "react-icons";
import useSidebarStore from "../../../store/sidebar";

export interface IconContainerProps {
  child: IconType;
  size?: number;
  size2?: number;
  onClick?: () => void;
}
const IconContainer: React.FC<IconContainerProps> = ({
  child,
  size = 40,
  size2 = 40,
  onClick,
}) => {
  const { isOpen } = useSidebarStore();
  const [isHovered, setIsHovered] = useState(false);
  const style: React.CSSProperties = {};
  const ChildIcon = child;
  const classes = `${
    isHovered && "bg-slate-200 text-blue-900"
  } cursor-pointer flex items-center justify-center`;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes}
      style={style}
    >
      <ChildIcon size={isOpen ? size : size2} />
    </div>
  );
};

export default IconContainer;
