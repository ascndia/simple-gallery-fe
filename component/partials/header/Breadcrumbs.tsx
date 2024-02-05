import React, { useEffect } from "react";
import useMainStore from "../../../store/main";
import Breadcrumb from "./Breadcrumb";

const Breadcrumbs = () => {
  const { breadcrumbs, setBreadcrumbs, setActivePath } = useMainStore();
  useEffect(() => {
    setBreadcrumbs(["home", "video", "lele", "rururu.mp4"]);
  }, []);

  return (
    <div className="flex">
      {breadcrumbs.map((el, index) => (
        <React.Fragment key={index}>
          <Breadcrumb path={breadcrumbs.slice(0, index + 1)} name={el} />
          {index !== breadcrumbs.length - 1 && "/"}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
