import React from "react";

import TwoGis from "../../assets/icon/Blog/TwoGis.webp";
import Whatsapp from "../../assets/icon/Blog/Whatsapp.webp";
import Call from "../../assets/icon/Blog/Call.webp";

import "./style.scss";

function Blog() {
    return (
        <>
            <div className="blog">
                <li>
                    <a href="#" target="_blank" className="blog-link">
                        <div className="blog-name first">Открыть карту</div>
                        <img src={TwoGis} className="blog-img" alt="TwoGis" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" className="blog-link">
                        <div className="blog-name second">Написать</div>
                        <img src={Whatsapp} className="blog-img" alt="Whatsapp" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <img src={Call} className="blog-img another" alt="Call" />
                    </a>
                </li>
            </div>
        </>
    );
}

export default Blog;
