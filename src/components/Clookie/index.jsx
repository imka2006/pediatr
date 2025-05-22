import React, { useState } from "react";
import Lil from "./Lil";
import Full from "./Full";

import "./style.scss";

function Cookie() {
    const [lil, setLil] = useState(() => {
        const consent = localStorage.getItem("cookieConsent");
        return !consent; 
    });
    const [full, setFull] = useState(false);

    const onClose = () => {
        localStorage.setItem("cookieConsent", "false"); 
        setFull(false);
        setLil(false);
    };

    return (
        <>
            {lil && <Lil setLil={setLil} setFull={setFull} />}
            {full && (
                <>
                    <div
                        className="cookie-wrapper"
                        onClick={() => onClose()}
                    ></div>
                    <Full setLil={setLil} setFull={setFull} />
                </>
            )}
        </>
    );
}

export default Cookie;
