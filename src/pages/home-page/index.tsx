
import BuyOnMarketplace from "../../components/sections/home/buy-on-marketplace";
import ContactUs from "../../components/sections/home/contact-us";
import Faqs from "../../components/sections/home/faq";
import HeroSection from "../../components/sections/home/hero-section";
import OurCategories from "../../components/sections/home/our-categories";
import SellOnMarketplace from "../../components/sections/home/sell-on-marketplace";
import SubscribeNewsLetter from "../../components/sections/home/subscribe";
import WhyChooseUs from "../../components/sections/home/why-choose-us";

const Home = () => {
 
  
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
