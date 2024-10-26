import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import LandingPage from "./pages/home";

function App() {
  
  const [isAuthorized, setIsAuthorized] = useState(false); 

  return (
    <BrowserRouter>
      {isAuthorized ? <Hero /> : <LandingPage  setIsAuthorized={setIsAuthorized}/>}
    </BrowserRouter>
  );
}

export default App;
