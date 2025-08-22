import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Mainpage from "./Layout/Mainpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainpage />} />
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
