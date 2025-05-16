import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Profile from "../../assets/icon/Principles/Post/Profile.svg";
import Like from "../../assets/icon/Principles/Post/Like.svg";
import Commit from "../../assets/icon/Principles/Post/Commit.svg";
import Share from "../../assets/icon/Principles/Post/Share.svg";
import Save from "../../assets/icon/Principles/Post/Save.svg";
import Arrow from "../../assets/icon/Principles/Post/Arrow.svg";
import Dots from "../../assets/icon/Principles/Post/Dots.svg";

import "./style.scss";

function Post({ img, text, link }) {
    useEffect(() => {
        AOS.init();
    }, []);

    const truncateText = (str, maxLength = 170) => {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };

    return (
        <div className="post" data-aos="fade-up">
            <div className="post-head">
                <div className="post-info">
                    <img src={Profile} alt="profile" />
                    <h4 className="post-name">
                        mama.doctor.kg <span>Медицинский центр</span>
                    </h4>
                </div>
                <img src={Dots} alt="dots" />
            </div>
            <div className="post-img__wrapper">
                <img src={img} className="post-image" alt="post" />
            </div>
            <div className="post-btn">
                <div className="post-inner">
                    <img src={Like} alt="Like" />
                    <img src={Commit} alt="Commit" />
                    <img src={Share} alt="Share" />
                </div>
                <img src={Save} alt="Save" />
            </div>
            <h4 className="post-tag">mama.doctor.kg</h4>
            <p className="post-text">{truncateText(text)}</p>
            <a href={link} target="_blank" rel="noreferrer" className="post-link">
                Читать полностью <img src={Arrow} alt="arrow" />
            </a>
        </div>
    );
}

export default Post;
