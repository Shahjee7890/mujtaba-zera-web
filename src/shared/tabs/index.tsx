import React from "react";
import { Typography } from "../../components/shared/typography";
import type { TabsProps } from "../../types";


const Tabs: React.FC<TabsProps> = ({ tabs, handleMenuClick, activeMenu }) => {
  return (
    <div className="border-1 border-secondary-dark flex items-center justify-normal md:justify-center px-3 py-2 rounded-[10px] sm:rounded-full whitespace-nowrap md:whitespace-wrap overflow-x-auto tabs-scrollable">
      <ul className="flex items-center justify-normal md:justify-center">
        {tabs?.map((tab) => (
      <li
  key={tab.id}
  onClick={() => handleMenuClick(tab.id)}
  className={`cursor-pointer py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
    ${activeMenu === tab.id
      ? "bg-gradient-primary text-white shadow-md"
      : "bg-transparent text-black hover:text-secondary-dark"
    }`}
>
  <Typography
    size="lg"
    className="inter transition-colors duration-300 ease-in-out"
  >
    {tab.title}
  </Typography>
</li>

        ))}
      </ul>
    </div>
  );
};

export default Tabs;
