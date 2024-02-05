"use client";
import React from "react";
import Home from "../../layout/Home";
import useMainStore from "../../store/main";

const page = () => {
  const { activePath } = useMainStore();
  return (
    <div>
      <Home>
        <div>
          {activePath.map((el, index) => (
            <React.Fragment key={index}>
              <div>{el}</div>
            </React.Fragment>
          ))}
        </div>
      </Home>
    </div>
  );
};

export default page;
