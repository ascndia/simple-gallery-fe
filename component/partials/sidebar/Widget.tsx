import React from "react";
import { IconType } from "react-icons";
import IconContainer, { IconContainerProps } from "./IconContainer";
import useSidebarStore from "../../../store/sidebar";

interface Props {
  iconProps: IconContainerProps;
  onClick?: () => void;
  title: string;
}
const Widget: React.FC<Props> = (props) => {
  const { iconProps, onClick, title } = props;
  const { isOpen } = useSidebarStore();
  const className = `${isOpen && "flex"}`;
  return (
    <div className={className}>
      <IconContainer {...iconProps} />
      {isOpen && (
        <div>
          <p className="text-md">{title}</p>
        </div>
      )}
    </div>
  );
};

export default Widget;
