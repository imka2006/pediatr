import React from "react";
import Top from "./Top";
import Schedule from "./Schedule";
import Location from "./Location";
import Mobile from "../Mobile";
function Right() {
    return (
        <>
            <div className="hero-right">
                {window.innerWidth < 530 || window.innerWidth > 1295 ? (
                    <Top />
                ) : null}

                <div className="hero-right__bottom">
                    {window.innerWidth > 600 ? (
                        <>
                            {/* {window.innerWidth >= 1295 && window.innerWidth >= 889 ? <Schedule /> : <></>} */}
                            {window.innerWidth < 889 ||
                            window.innerWidth > 1295 ? (
                                <Schedule />
                            ) : (
                                <></>
                            )}
                            {/* {window.innerWidth <= 889 && window.innerWidth >= 1295 ? (<Schedule />) : null} */}
                            <Location />
                        </>
                    ) : (
                        <>
                            <Mobile />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Right;
