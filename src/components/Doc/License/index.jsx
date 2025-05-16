import { useEffect, useState } from "react";
import AOS from "aos";

import First from "../../../assets/img/Doc/License/First.webp";
import Second from "../../../assets/img/Doc/License/Second.webp";
import Bg from "../../../assets/img/Bg/License.webp";
import BgMb from "../../../assets/img/Bg/MobileLicense.webp";

import "aos/dist/aos.css";
import "./style.scss";

function License() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="doc-license" data-aos="fade-up">
      <img
        src={isMobile ? BgMb : Bg}
        alt="background"
        className="doc-license__bg"
        data-aos={isMobile ? "fade-down-left" : undefined}
      />

      <div className="doc-license__content">
        <h3 className="doc-license__title">Наши лицензии и сертификаты</h3>
        <p className="doc-license__text">
          Вы можете быть уверены, что ваш ребенок в надёжных руках, а наша клиника
          работает в полном соответствии с законодательством и медицинскими нормами.
        </p>
      </div>

      <div className="doc-license__images">
        <img src={First} alt="license 1" />
        <img src={Second} alt="license 2" />
      </div>
    </div>
  );
}

export default License;
