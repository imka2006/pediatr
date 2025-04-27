import React from "react";
import Left from "./Left";
import "./style.scss";
import Right from "./Right";
import Top from "./Right/Top";
import Schedule from "./Right/Schedule";
function Hero({setModal}) {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero-wrapper">
                        <Left />
                        <Right setModal={setModal} />
                    </div>
                    {window.innerWidth >= 530 && window.innerWidth <= 1295 ? (
                        <div className="hero-see">
                            <Top setModal={setModal} />
                            {window.innerWidth >= 889 ? (
                                <Schedule />
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
}

export default Hero;
