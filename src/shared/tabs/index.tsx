import React from "react";
import { Typography } from "../../components/shared/typography";

interface Tab {
  id: number;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  handleMenuClick: (id: number) => void;
  activeMenu: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, handleMenuClick, activeMenu }) => {
  return (
    <div className="border-1 border-[#228F53] flex items-center justify-normal md:justify-center px-3 py-2 rounded-[10px] sm:rounded-full whitespace-nowrap md:whitespace-wrap overflow-x-auto tabs-scrollable">
      <ul className="flex items-center justify-normal md:justify-center">
        {tabs?.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleMenuClick(tab.id)}
            className={`cursor-pointer py-3 px-8  ${
              activeMenu === tab.id
                ? "bg-gradient-primary rounded-full text-white"
                : "text-black"
            }`}
          >
            <Typography size="lg" className="inter">
              {tab.title}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
