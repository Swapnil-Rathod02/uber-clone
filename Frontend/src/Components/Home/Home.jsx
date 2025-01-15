import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Input from "./Input";
import TripSection from "./TripSection";
import Slider from "./Slider";

function Home() {
  return (
    <div className="h-screen w-screen space-y-4 ">
      <Header />
      <Input />
      <TripSection />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
