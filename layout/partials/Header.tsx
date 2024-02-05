import React from "react";
import Burger from "../../component/partials/header/Burger";
import Breadcrumbs from "../../component/partials/header/Breadcrumbs";

const Header = () => {
  return (
    <div className="w-full bg-slate-400 flex justify-between p-2">
      <div className="flex gap-2">
        <Burger />
        <Breadcrumbs />
      </div>

      <div>searchbar</div>
    </div>
  );
};

export default Header;
