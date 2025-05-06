import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Principles from "./components/Principles";
import Doc from "./components/Doc";
import Reviews from "./components/Reviews";
import Modal from "./components/Modal";

import "./App.scss";
import Blog from "./components/Blog";

function App() {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const timeoutFirst = setTimeout(() => {
            const el = document.querySelector(".blog-name.first");
            if (el) {
                el.classList.add("nonstop");
            }
        }, 3500);
        const timeoutSecond = setTimeout(() => {
            const el = document.querySelector(".blog-name.second");
            if (el) {
                el.classList.add("nonstop");
            }
        }, 6500);

        return () => clearTimeout(timeoutFirst, timeoutSecond);
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

            {window.innerWidth <= 700 && <Blog />}
        </>
    );
}

export default App;
