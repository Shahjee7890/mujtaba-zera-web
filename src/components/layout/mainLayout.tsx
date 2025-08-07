import NavBar from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import ScrollToTop from "../../shared/scroll-to-top";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop/>
      <main className="flex flex-col items-center max-w-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
