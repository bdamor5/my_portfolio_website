import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./components/Header/Header";
import Languages from "./components/Languages/Languages";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Languages />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
