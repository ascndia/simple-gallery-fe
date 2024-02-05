import React, { ReactNode, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import Main from "./partials/Main";

const Home = ({ children }: { children: ReactNode }) => {
  const [isNavOpen, setNavOpened] = useState(false);
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <Header />
        {children}
      </Main>
    </div>
  );
};

export default Home;
