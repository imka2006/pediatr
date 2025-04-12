import logo from "../../assets/icon/Header/logo.svg";
import "./style.scss";

function index() {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <img className="header-logo" src={logo} alt="logo" />
                        {
                            window.innerWidth >= 700 ? (
                                <ul className="header-list">
                                    <li className="header-item"> <a href="tel:+996508766555" className="header-link" > 0 508 766 555 </a> </li>
                                    <li className="header-item"> <a href="tel:+996550766555" className="header-link" > 0 550 766 555 </a> </li>
                                    <li className="header-item"> <a href="https://2gis.kg/bishkek/geo/15763234351069788/74.603008,42.882223" className="header-link" target="_blank" rel="noopener noreferrer" > г. Бишкек, ул. Орозбекова 112 </a> </li>
                                </ul>
                            ) : (
                                <div className="header-btn">
                                    <div></div>
                                    <p className="header-info">
                                    <span>Открыто</span> 9:00 - 19:00
                                    ул. Орозбекова 112 
                                    </p>
                                </div>
                            )
                        }
                       
                    </div>
                </div>
            </header>
        </>
    );
}

export default index;
