'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import ModuloinicioBody from "./homeSections/ModuloinicioBody";
import ModuloinicioRowEight from "./homeSections/ModuloinicioRowEight";
import ModuloinicioRowFive from "./homeSections/ModuloinicioRowFive";
import ModuloinicioRowFour from "./homeSections/ModuloinicioRowFour";
import ModuloinicioRowOne from "./homeSections/ModuloinicioRowOne";
import ModuloinicioRowTen from "./homeSections/ModuloinicioRowTen";



const HomePage = () => {
  
  return (
    <div className="w-full bg-white-a700">
      <Header />
      <div>
        <ModuloinicioRowOne />
        <ModuloinicioRowFour />
        <ModuloinicioRowFive />
        <ModuloinicioBody />
        <ModuloinicioRowEight />
        <ModuloinicioRowTen />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
