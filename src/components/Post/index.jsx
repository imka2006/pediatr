import React, { useEffect, useRef, useState } from "react";

import Profile from "../../assets/icon/Principles/Post/Profile.svg"
import Like from "../../assets/icon/Principles/Post/Like.svg"
import Commit from "../../assets/icon/Principles/Post/Commit.svg"
import Share from "../../assets/icon/Principles/Post/Share.svg"
import Save from "../../assets/icon/Principles/Post/Save.svg"
import Arrow from "../../assets/icon/Principles/Post/Arrow.svg"
import Dots from "../../assets/icon/Principles/Post/Dots.svg"

import "./style.scss"

function Post({img, text, link}) {

     const ref = useRef(null);
        const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                {
                    threshold: 0.3,
                }
            );
        
            const node = ref.current;
            if (node) observer.observe(node);
        
            return () => {
                if (node) observer.unobserve(node);
            };
        }, []);

    return (
        <>
        <div ref={ref} className={`post ${isVisible ? "animate" : ""}`}>
            <div className="post-head">
                <div className="post-info">
                    <img src={Profile} alt="profile" />
                    <h4 className="post-name">mama.doctor.kg <span>Медицинский центр</span></h4>
                </div>
                <img src={Dots} alt="dots" />
            </div>
            <img src={img} className="post-image" alt="img" />
            <div className="post-btn">
                <div className="post-inner">
                    <img src={Like} alt="Like" />
                    <img src={Commit} alt="Commit" />
                    <img src={Share} alt="Share" />
                </div>
                <img src={Save} alt="Save" />
            </div>
            <h4 className="post-tag">mama.doctor.kg</h4>
            <p className="post-text">{text}...</p>
             <a href={link} target="_blank" className="post-link">Читать полностью <img src={Arrow} alt="arrow" /></a>
        </div>
        </>
    );
}

export default Post;
