import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { ToastContainer } from 'react-toastify';
import Fotter from "./components/Fotter";
import Team from "./components/Team";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
    <ToastContainer />
    <Header />
     <About />
     <Team />
     <Project />
     <Testimonial />
     <Contact />
     <Fotter />
    </div>
  );
};

export default App;
