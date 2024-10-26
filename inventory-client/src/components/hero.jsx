import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/hero.scss";
import Sidebar from "../components/sidebar";

import Right_dashboard from "./right_dashboard";

const hero = () => {
  return (
    <>
    
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-left">
          <Sidebar />
        </div>
        <div className="hero-right">
          <Right_dashboard />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default hero;
