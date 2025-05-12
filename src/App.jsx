import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Principles from "./components/Principles";
import Doc from "./components/Doc";
import Reviews from "./components/Reviews";
import Modal from "./components/Modal";
import Blog from "./components/Blog";

import "./App.scss";

function App() {
  const [modal, setModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);

    const applyAnimation = (selector, delay) => {
      setTimeout(() => {
        const el = document.querySelector(selector);
        if (el) el.classList.add("nonstop");
      }, delay);
    };

    applyAnimation(".blog-name.first", 3500);
    applyAnimation(".blog-name.second", 6500);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero setModal={setModal} />
      <Services />
      <Principles />
      <Doc />
      <Reviews />
      {modal && <Modal setModal={setModal} />}
      {isMobile && <Blog />}
    </>
  );
}

export default App;
