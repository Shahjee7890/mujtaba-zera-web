import { useLocation } from "react-router-dom";
import BuyOnMarketplace from "../../components/sections/home/buy-on-marketplace";
import ContactUs from "../../components/sections/home/contact-us";
import Faqs from "../../components/sections/home/faq";
import HeroSection from "../../components/sections/home/hero-section";
import OurCategories from "../../components/sections/home/our-categories";
import SellOnMarketplace from "../../components/sections/home/sell-on-marketplace";
import SubscribeNewsLetter from "../../components/sections/home/subscribe";
import WhyChooseUs from "../../components/sections/home/why-choose-us";
import { useEffect } from "react";

const Home = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurCategories />
      <BuyOnMarketplace />
      <SellOnMarketplace />
      <Faqs />
      <ContactUs />
      <SubscribeNewsLetter styling={"w-full md:w-[510px]"} />
    </>
  );
};

export default Home;
