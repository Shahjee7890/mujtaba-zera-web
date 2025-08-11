import { RouterProvider } from "react-router-dom";

import "./styles/global.css";
import Router from "./router";


function App() {

  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
