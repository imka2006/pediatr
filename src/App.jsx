import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Principles from "./components/Principles";
import Doc from "./components/Doc";
import Reviews from "./components/Reviews";
import Modal from "./components/Modal";
import Blog from "./components/Blog";

import MainBg from "./assets/img/Bg/Main.webp";

import "./App.scss";
import Cookie from "./components/Clookie";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    // Анимация названий в блоге
    const animateElement = (selector, delay) => {
      setTimeout(() => {
        const el = document.querySelector(selector);
        if (el) el.classList.add("nonstop");
      }, delay);
    };

    animateElement(".blog-name.first", 3500);
    animateElement(".blog-name.second", 6500);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <Hero setModal={setModalOpen} />
      <img className="dna" src={MainBg} alt="DNA background" />
      <Services />
      <Principles />
      <Doc />
      <Reviews />
      {modalOpen && <Modal setModal={setModalOpen} />}
      {isMobile && <Blog />}
      <Cookie />
    </>
  );
}

export default App;