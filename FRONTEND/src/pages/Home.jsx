import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Fearures from "../sections/Fearures";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";
// import UrlForm from "../components/UrlForm";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-slate-50">
          {/* <UrlForm /> */}
          <Hero />
          <Fearures />
          <About />
          <CTA />
          <Footer />
      </div>
    </>
  );
};

export default Home;
