import { useCallback, useEffect, useState } from "react";
import { Typography } from "../../../shared/typography";
import Tabs from "../../../../shared/tabs";
import CategoriesLayout from "../../../ui/categories-layout";
import { content, tabs } from "../../../../data";
import Aos from "aos";
import "aos/dist/aos.css";

const OurCategories = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const handleMenuClick = useCallback((menu: number) => {
    setActiveMenu(menu);
  }, []);
  // ---animation-----
  useEffect(() => {
    Aos.init({});
  }, []);

  const tabsContent = content?.categoriesTabsData;

  return (
    <section
      id="categories"
      className="w-full flex flex-col justify-center items-center px-5 pt-8 sm:py-15 md:py-10 xl:py-30"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
    >
      {/* child */}
      <div
        className="max-w-section w-full flex flex-col justify-center items-center gap-1"
      
      >
        {/* intro of page */}
        <div className="flex flex-col justify-center items-center">
          <div>
            <Typography size="md" className="inter text-slate-lighter">
              Everything in one place
            </Typography>
          </div>
          {/* heading */}
          <div>
            <Typography size="h3" as="h3" className="flex flex-wrap gap-2">
              Our Robust
              <span className="text-gradient-secondary">Categories</span>
            </Typography>
          </div>
        </div>
        {/* tabes */}
        <div className="w-full flex items-center justify-center py-7">
          <Tabs
            tabs={tabs}
            handleMenuClick={handleMenuClick}
            activeMenu={activeMenu}
          />
        </div>
        <div>
          <div className="py-1">
            <CategoriesLayout
              data={tabsContent[activeMenu as keyof typeof tabsContent]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCategories;
