import React from "react";
import License from "./License";

import "./style.scss";
import Tools from "./Tools";

function Doc() {
    return (
        <>
            <div className="doc">
                <div className="container">
                    <div className="doc-wrapper">
                        <License />
                        <Tools />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Doc;
