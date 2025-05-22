import React, { useState } from "react";
import Lil from "./Lil";
import Full from "./Full";

import "./style.scss";

function Cookie() {
    const [lil, setLil] = useState(true);
    const [full, setFull] = useState(false);

    return (
        <>
            {lil && <Lil setLil={setLil} setFull={setFull} />}
            {full && (
                <>
                    <div className="cookie-wrapper" onClick={() =>setFull(false) }></div>
                    <Full  setLil={setLil} setFull={setFull}/>
                </>
            )}
        </>
    );
}

export default Cookie;
