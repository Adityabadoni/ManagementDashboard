import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import { useRef } from "react";
import { Header } from "./Component/Header/Header";
import Dashborad from "./Pages/Dashborad/Dashborad";
import Product from "./Pages/Products/Product";
import Posts from "./Pages/Posts/Posts";

const Router = () => {
  return (
<>
<Routes>
      <Route path="/" element={<Sidebar />}>
    

        <Route path="home" element={<Dashborad />} />
        <Route path="product" element={<Product />} />
        <Route path="post" element={<Posts/>} />
         
      </Route>
    </Routes>
</>
  );
};
export default Router;
