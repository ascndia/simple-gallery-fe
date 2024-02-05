import React, { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <main className="w-full">{children}</main>;
};

export default Main;
