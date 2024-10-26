import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard_items from "../components/dashboard_items";
import Stock_item_count from "../pages/stock_item_count";
import Add_item from  "../pages/add_item";
import Issue_item_form from  '../pages/issue_item_form';
import Issued_item_count  from "../pages/issued_item_count";
import Past_discontinued_item  from  "../pages/past_discontinued_item_history";
import Past_issued_history from  "../pages/past_issued_history";
import Admin_profile from "../pages/admin_profile";
import Change_password from "../pages/change_password";
import Hero from "../components/hero";
import Stock_item_info from "../pages/stock_item_info";
import Past_item_info from "../pages/past_item_info";
import Issued_item_info from "../pages/issued_item_info";
import LandingPage from "./pages/home";
import Past_dis_item_history_more_info from "../pages/past_dis_item_history_more_info";
import About_us from "../pages/about_us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard_items />,
      },
      {
        path: "/stockitemcount",
        element: <Stock_item_count />,
      },
      {
        path: "/additem",
        element: <Add_item />,
      },
      {
        path: "/issueitemform",
        element: <Issue_item_form />,
      },
      {
        path: "/issueditemcount",
        element: <Issued_item_count />,
      },
      {
        path: "/pastdiscontinueditem",
        element: <Past_discontinued_item />,
      },
      {
        path: "/pastissuedhistory",
        element: <Past_issued_history />,
      },
      {
        path: "/adminprofile",
        element: <Admin_profile />,
      },
      {
        path: "/changepassword",
        element: <Change_password />,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
      {
        path: "/stockiteminfo",
        element: <Stock_item_info />,
      },
      {
        path: "/pastiteminfo",
        element: <Past_item_info />,
      },
      {
        path: "/pastitemhistory",
        element: <Past_dis_item_history_more_info />,
      },
      {
        path: "/issuediteminfo",
        element: <Issued_item_info />,
      },
      {
        path: "/aboutus",
        element: <About_us />,
      },
    ],
  },
]);

export default router;
