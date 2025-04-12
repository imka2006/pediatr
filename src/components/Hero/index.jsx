import React from "react";
import Left from "./Left";
import "./style.scss";
import Right from "./Right";
import Top from "./Right/Top";
import Schedule from "./Right/Schedule";
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero-wrapper">
                        <Left />
                        <Right />
                    </div>
                    {/* {window.innerWidth < 889 || window.innerWidth > 1295 ? (
                        <Schedule />
                    ) : (
                        <></>
                    )} */}
                    {window.innerWidth >= 530 && window.innerWidth <= 1295 ? (
                        <div className="hero-see">
                            
                            <Top />
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
