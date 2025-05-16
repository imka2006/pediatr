import TwoGis from "../../assets/icon/Blog/TwoGis.webp";
import Whatsapp from "../../assets/icon/Blog/Whatsapp.webp";
import Call from "../../assets/icon/Blog/Call.webp";

import "./style.scss";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-item">
        <a href="#" target="_blank" rel="noopener noreferrer" className="blog-link">
          <div className="blog-name first">Открыть карту</div>
          <img src={TwoGis} className="blog-img" alt="TwoGis" />
        </a>
      </div>
      <div className="blog-item">
        <a href="#" target="_blank" rel="noopener noreferrer" className="blog-link">
          <div className="blog-name second">Написать</div>
          <img src={Whatsapp} className="blog-img" alt="Whatsapp" />
        </a>
      </div>
      <div className="blog-item">
        <a href="tel:+996508766555" className="blog-link">
          <img src={Call} className="blog-img another" alt="Call" />
        </a>
      </div>
    </div>
  );
}

export default Blog;
