import React from "react";
import Top from "./Top";
import Schedule from "./Schedule";
import Location from "./Location";
import Mobile from "../Mobile";
function Right({setModal}) {
    return (
        <>
            <div className="hero-right">
                {window.innerWidth < 530 || window.innerWidth > 1295 ? (
                    <Top setModal={setModal} />
                ) : null}

                <div className="hero-right__bottom">
                    {window.innerWidth > 600 ? (
                        <>
                            {window.innerWidth < 889 ||
                            window.innerWidth > 1295 ? (
                                <Schedule />
                            ) : (
                                <></>
                            )}
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
