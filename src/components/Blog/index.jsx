import React from "react";

import TwoGis from "../../assets/icon/Left/Slider/TwoGis.svg";
import Whatsapp from "../../assets/icon/Left/Slider/Whatsapp.svg";
import Call from "../../assets/icon/Left/Slider/Call.svg";

import "./style.scss";

function Blog() {
    return (
        <>
            <div className="blog">
                <li>
                    <a href="#" target="_blank" className="blog-link">
                        <div className="blog-name first">Открыть карту</div>
                        <img src={TwoGis} alt="TwoGis" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="blog-link">
                        <div className="blog-name second">Написать</div>
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <img src={Call} alt="Call" />
                    </a>
                </li>
            </div>
        </>
    );
}

export default Blog;
