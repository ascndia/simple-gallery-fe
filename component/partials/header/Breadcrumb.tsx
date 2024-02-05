import React from "react";
import useMainStore from "../../../store/main";

interface Props {
  //   index: number;
  name: string;
  path: string[];
}
const Breadcrumb: React.FC<Props> = (props) => {
  const { name, path } = props;
  const { setActivePath } = useMainStore();
  const handleClick = () => {
    setActivePath(path);
  };
  return (
    <div style={{ marginRight: 8, marginLeft: 8 }} onClick={handleClick}>
      {name}
    </div>
  );
};

export default Breadcrumb;
