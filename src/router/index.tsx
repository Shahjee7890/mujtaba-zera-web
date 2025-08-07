import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page";
import NotFound from "../pages/not-found-page";
import MainLayout from "../components/layout/mainLayout";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsAndConditions from "../pages/terms-and-condition";
import RemoveAccount from "../pages/remove-your-account";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/remove-account",
        element: <RemoveAccount />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
]);

export default Router;
