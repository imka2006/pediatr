import React, { useEffect, useState } from "react";
import Top from "./Top";
import Schedule from "./Schedule";
import Location from "./Location";
import Mobile from "../Mobile";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function Right({ setModal }) {
  const width = useWindowWidth();

  return (
    <div className="hero-right">
      {(width < 530 || width > 1295) && <Top setModal={setModal} />}

      <div className="hero-right__bottom">
        {width > 600 ? (
          <>
            {(width < 889 || width > 1295) && <Schedule />}
            <Location />
          </>
        ) : (
          <Mobile />
        )}
      </div>
    </div>
  );
}

export default Right;
